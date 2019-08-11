import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchRequest from '../../helpers/fetchRequest';
import { HOST, createEffect } from '../../helpers/constants';
import { setPresetValue } from '../../store/actions/blocksActions';
import { addNewPresetsFromDB } from '../../store/actions/presetsAction';

import './presetsDropdownSelector.css';

class PresetsDropdownSelector extends Component {
  componentDidMount() {
    const { addNewPresetsFromDB } = this.props;
    fetchRequest.get(`${HOST}/titles`)
      .then(response => addNewPresetsFromDB(response.data.userPresets));
  }

  handleSelectorChange = async (event) => {
    const { setPresetValue, blocksData, audioData } = this.props;
    if (audioData.sound) {
      blocksData.forEach(({ name, isVisible }) => {
        isVisible && audioData.sound.removeEffect(createEffect[name]);
      });
      await setPresetValue(event.target.value, blocksData);
      const { blocksData: newBlocksData } = this.props;
      newBlocksData.forEach(({ name, isVisible, effects}) => {
        let newPreset = createEffect[name];
        Object.keys(effects).map((effectName)=>{
          newPreset[effectName] = effects[effectName];
        });
        isVisible && audioData.sound.addEffect(newPreset);
      });
    }
  };

  render() {
    const { presetsData } = this.props;
    const listOfPresets = (
      presetsData.map((value, i) => <option className="option" key={i} value={value}>{value}</option>)
    );

    return (
      <select
        className="SlidersComponent__header--selector"
        onChange={this.handleSelectorChange}
      >
        {listOfPresets}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  blocksData: state.blocksData,
  presetsData: state.presetsData,
  audioData: state.audioData,
});

PresetsDropdownSelector.propTypes = {
  blocksData: PropTypes.instanceOf(Array),
  audioData: PropTypes.instanceOf(Object),
  presetsData: PropTypes.instanceOf(Array),
  setPresetValue: PropTypes.func,
  addNewPresetsFromDB: PropTypes.func,
};

export default connect(mapStateToProps, {
  setPresetValue,
  addNewPresetsFromDB,
})(PresetsDropdownSelector);
