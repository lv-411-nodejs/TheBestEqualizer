import React from 'react';
import './saveButton.css';
import { saveIcon } from '../../../assets/icons/icons';

const SaveButton = () => (
  <button className="SaveButton"> {saveIcon} Save</button>
);

export default SaveButton;
