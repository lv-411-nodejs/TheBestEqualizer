import React from 'react';
import PropTypes from 'prop-types';
import FormField from '../formField';

const RenderFormFields = ({ fieldsToRender, onInputChange, user, errors }) => (
  fieldsToRender.map((field) => (
    <FormField
      key={field.name}
      onInputChange={onInputChange}
      field={field}
      value={user[field.name] || ''}
    />
  ))
);

RenderFormFields.propTypes = {
  fieldsToRender: PropTypes.instanceOf(Array).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default RenderFormFields;

