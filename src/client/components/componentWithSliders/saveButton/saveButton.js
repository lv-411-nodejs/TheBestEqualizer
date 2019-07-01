import React from 'react';
import './saveButton.css';
import { saveIcon } from '../../../assets/icons/icons';

const SaveButton = (props) => (
  <button type="button" className="SaveButton" onClick={props.onclick}>
    {' '}
    {saveIcon}
    {' '}
    Save
  </button>
);

export default SaveButton;
