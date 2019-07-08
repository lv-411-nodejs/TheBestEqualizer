import React from 'react';
import PropTypes from 'prop-types';
import './formField.css';

const FormField = ({ field: { name, label, type }, onInputChange, value }) => (
  <div>
    <label htmlFor="field" className="label">{label}</label>
    <div className="field">
      <input onChange={onInputChange} name={name} type={type} value={value} />
    </div>
  </div>
);


FormField.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  field: PropTypes.instanceOf(Object).isRequired,
};

export default FormField;
