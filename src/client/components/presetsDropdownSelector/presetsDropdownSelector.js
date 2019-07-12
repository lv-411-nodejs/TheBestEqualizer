import React from 'react';
import { connect } from 'react-redux';
import { setPresetValue } from '../../actions/presetsAction';

import './presetsDropdownSelector.css';

const PresetsDropdownSelector = (props) => {
  const { setPresetValue } = props;
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

export default connect(null, {
  setPresetValue,
})(PresetsDropdownSelector);
