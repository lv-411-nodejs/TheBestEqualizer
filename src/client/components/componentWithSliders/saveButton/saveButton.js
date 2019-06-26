import React from 'react';
import './saveButton.css';
import { saveIcon } from '../../../assets/icons/icons';

const SaveButton = () => (
  <button className="SaveButton" id="savePressetes"> {saveIcon} Save</button>
);

export default SaveButton;
