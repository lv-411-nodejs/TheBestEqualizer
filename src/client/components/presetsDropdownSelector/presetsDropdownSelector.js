import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchRequest from '../../helpers/fetchRequest';
import { setPresetValue } from '../../store/actions/blocksActions';
import { addNewPresetsFromDB } from '../../store/actions/presetsAction';

import './presetsDropdownSelector.css';

class PresetsDropdownSelector extends Component {
  componentDidMount() {
    const { addNewPresetsFromDB } = this.props;
    fetchRequest.get('http://localhost:8080/presets')
      .then(response => addNewPresetsFromDB(response.data.userPresets));
  }

  render() {
    const { presetsData } = this.props;
    const handleSelectorChange = (event) => {
      this.props.setPresetValue(event.target.value);
    };

    return (
      <select className="SlidersComponent__header--selector" onChange={handleSelectorChange}>
        {presetsData.map((value, i) => <option className="option" key={i} value={value}>{value}</option>)}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  presetsData: state.presetsData,
});

PresetsDropdownSelector.propTypes = {
  setPresetValue: PropTypes.func,
  presetsData: PropTypes.instanceOf(Array),
  addNewPresetsFromDB: PropTypes.func,
};

export default connect(mapStateToProps, {
  setPresetValue,
  addNewPresetsFromDB,
})(PresetsDropdownSelector);
