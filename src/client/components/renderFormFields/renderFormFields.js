import React from 'react';
import FormField from '../formField'

const RenderFormFields = ({ fieldsToRender, onInputChange }) => (
  fieldsToRender.map((el, i) => (
    <FormField
      key={i}
      onInputChange={onInputChange}
      el={el}
    />
  ))
);

export default RenderFormFields;
