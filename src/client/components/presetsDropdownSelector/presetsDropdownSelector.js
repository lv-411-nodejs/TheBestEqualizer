import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPresetValue } from '../../store/actions/blocksActions';

import './presetsDropdownSelector.css';

const PresetsDropdownSelector = ({ setPresetValue }) => {
  const values = ['Jazz', 'Rock', 'Rap'];

  const handleSelectorChange = (event) => {
    setPresetValue(event.target.value);
  };

  return (
    <select className="SlidersComponent__header--selector" onChange={handleSelectorChange}>
      {values.map((value, i) => <option className="option" key={i} value={value}>{value}</option>)}
    </select>
  );
};

PresetsDropdownSelector.propTypes = {
  setPresetValue: PropTypes.func,
};

export default connect(null, {
  setPresetValue,
})(PresetsDropdownSelector);
