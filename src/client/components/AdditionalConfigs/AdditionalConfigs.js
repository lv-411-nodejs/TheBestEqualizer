import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faCog } from '@fortawesome/free-solid-svg-icons';

import classes from './additionalConfigs.css';

const volumeIcon = <FontAwesomeIcon icon={faVolumeUp} />;
const cogIcon = <FontAwesomeIcon icon={faCog} />;

class AdditionalConfigs extends Component {
  render () {
    return (
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
          { cogIcon }
          Settings
        </div>
      </section>
    );
  }
}

export default AdditionalConfigs;
