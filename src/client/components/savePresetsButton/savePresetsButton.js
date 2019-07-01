import React from 'react';
import './savePresetsButton.css';
import { saveIcon } from '../../assets/icons/icons';

const SavePresetsButton = (props) => (
  <button type="button" className="SavePresetsButton" onClick={props.onclick}>
    {' '}
    {saveIcon}
    {' '}
    Save Preset
  </button>
);

export default SavePresetsButton;
