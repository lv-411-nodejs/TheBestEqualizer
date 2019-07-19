import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchRequest from '../../helpers/fetchRequest';
import { setPresetValue } from '../../store/actions/blocksActions';


import './presetsDropdownSelector.css';

class PresetsDropdownSelector extends Component {
  state = {
    values: ['Jazz', 'Rock', 'Pop'],
  }

  componentDidMount() {
    fetchRequest.get('http://localhost:8080/presets')
      .then(response => response.data.userPresets.map((item) => {
        this.setState((state) => {
          state.values.push(item.title);
          return state;
        });
      }));
  }

  render() {
    const handleSelectorChange = (event) => {
      this.props.setPresetValue(event.target.value);
    };

    return (
      <select className="SlidersComponent__header--selector" onChange={handleSelectorChange}>
        {this.state.values.map((value, i) => <option className="option" key={i} value={value}>{value}</option>)}
      </select>
    );
  }
}

PresetsDropdownSelector.propTypes = {
  setPresetValue: PropTypes.func,
};

export default connect(null, {
  setPresetValue,
})(PresetsDropdownSelector);
