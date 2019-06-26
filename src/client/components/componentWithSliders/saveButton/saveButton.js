import React from 'react';

import './saveButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const saveIcon = <FontAwesomeIcon icon={faSave}/>;

const SaveButton = () => (
  <button className="SaveButton" id="savePressetes"> {saveIcon} Save</button>
);

export default SaveButton;
