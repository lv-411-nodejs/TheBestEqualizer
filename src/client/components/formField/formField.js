import React from 'react';
import PropTypes from 'prop-types';
import './formField.css';

const FormField = ({ el: { name, label, type }, onInputChange }) => (
  <div>
    <label htmlFor="field" className="label">{label}</label>
    <div className="field">
      <input id="field" onChange={onInputChange} name={name} type={type} />
    </div>
  </div>
);


FormField.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  el: PropTypes.instanceOf(Object).isRequired,
};

export default FormField;
