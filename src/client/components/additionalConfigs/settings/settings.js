import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './settings.css';

const settingsIcon = <FontAwesomeIcon icon={faCog} />;

const Settings = () => {
  return (
    <div className='settingsContainer'>
      { settingsIcon }
      Settings
    </div>
  );
};

export default Settings;
