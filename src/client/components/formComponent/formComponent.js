import React from 'react';
import PropTypes from 'prop-types';
import RenderFormFields from '../renderFormFields/renderFormFields';
import Button from '../button';
import './formComponent.css';

const FormComponent = ({
  fieldsToRender,
  onInputChange,
  onFormSubmit,
  userData,
}) => (
  <form onSubmit={onFormSubmit} className="form-body" autoComplete="off">
    <RenderFormFields
      fieldsToRender={fieldsToRender}
      onInputChange={onInputChange}
      userData={userData}
    />
    <div className="field">
      <Button className="submit" value="Submit" type="submit" />
    </div>
  </form>
);

FormComponent.propTypes = {
  fieldsToRender: PropTypes.instanceOf(Array).isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default FormComponent;
