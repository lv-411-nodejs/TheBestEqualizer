import React from 'react';
import './savePresetsButton.css';
import { saveIcon } from '../../assets/icons/icons';

const SavePresetsButton = () => (
  <button type="button" className="SavePresetsButton">
    {' '}
    {saveIcon}
    {' '}
    Save Preset
  </button>
);

export default SavePresetsButton;
