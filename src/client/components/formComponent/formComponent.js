import React from 'react';
import PropTypes from 'prop-types';
import RenderFormFields from '../renderFormFields/renderFormFields';
import './formComponent.css';

const FormComponent = ({ fieldsToRender, onInputChange, onFormSubmit, user }) => (
  <div>
    <form onSubmit={onFormSubmit} className="form-body" autoComplete="off">
      <RenderFormFields 
        fieldsToRender={fieldsToRender} 
        onInputChange={onInputChange} 
        user={user} />
      <div className="field">
        <button type="submit" className="submit">Submit</button>
      </div>
    </form>
  </div>
);

FormComponent.propTypes = {
  fieldsToRender: PropTypes.instanceOf(Array).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default FormComponent;
