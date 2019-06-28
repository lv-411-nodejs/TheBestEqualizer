import React from 'react';
import './presetsDropdownSelector.css';

const PresetsDropdownSelector = () => {
  const values = ['Jazz', 'Rock', 'Rap'];

  return (
    <select className="SlidersComponent__header--selector">
      {values.map((value, i) => <option className="option" key={i} value={value}>{value}</option>)}
    </select>
  );
};

export default PresetsDropdownSelector;
