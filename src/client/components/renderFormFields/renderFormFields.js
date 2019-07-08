import React from 'react';
import PropTypes from 'prop-types';
import FormField from '../formField';

const RenderFormFields = ({ fieldsToRender, onInputChange, userData }) => (
  fieldsToRender.map(field => (
    <FormField
      key={ field.name }
      onInputChange={ onInputChange }
      field={ field }
      value={ userData[field.name] || '' }
    />
  ))
);

RenderFormFields.propTypes = {
  fieldsToRender: PropTypes.instanceOf(Array).isRequired,
  onInputChange: PropTypes.func.isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
};

export default RenderFormFields;

