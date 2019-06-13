import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faCog } from '@fortawesome/free-solid-svg-icons';

import './additionalConfigs.css';

const volumeIcon = <FontAwesomeIcon icon={faVolumeUp} />;
const cogIcon = <FontAwesomeIcon icon={faCog} />;

const AdditionalConfigs = () => {
  return (
    <section className='additionalSettingsContainer'>
      <div className='volumeElement'>
        { volumeIcon }
        <input type='range' className='range'/> Volume
      </div>
      <div className='modesElement'>
        <label className='switch'>
          <input type="checkbox"/><span className='slider'></span>
        </label>
        Modes
      </div>
      <div className='settings'>
        { cogIcon }
        Settings
      </div>
    </section>
  );
};

export default AdditionalConfigs;
