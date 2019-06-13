import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faCog } from '@fortawesome/free-solid-svg-icons';

<<<<<<< HEAD
import classes from './additionalConfigs.css';
=======
import './additionalConfigs.css';
>>>>>>> 5d5cd5692fe56d04c7d09a99fe0639e44742ea8f

const volumeIcon = <FontAwesomeIcon icon={faVolumeUp} />;
const cogIcon = <FontAwesomeIcon icon={faCog} />;

const AdditionalConfigs = () => {
  return (
<<<<<<< HEAD
    <section className={ classes.additionalSettingsContainer }>
      <div className={ classes.volumeElement }>
        { volumeIcon }
        <input type='range' /> Volume
      </div>
      <div className={ classes.modesElement }>
        <label className={ classes.switch }>
          <input type="checkbox"/><span className={ classes.slider }></span>
        </label>
        Modes
      </div>
      <div className={ classes.settings }>
=======
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
>>>>>>> 5d5cd5692fe56d04c7d09a99fe0639e44742ea8f
        { cogIcon }
        Settings
      </div>
    </section>
  );
};

export default AdditionalConfigs;
