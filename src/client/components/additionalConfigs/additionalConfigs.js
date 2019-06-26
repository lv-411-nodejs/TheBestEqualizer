import React from 'react';
import ModesThemeSwitcher from './modesThemeSwitcher/modesThemeSwitcher';
import Settings from './settings/settings';
import VolumeSlider from './volumeSlider/volumeSlider';

import './additionalConfigs.css';

const AdditionalConfigs = () => (
  <section className='additionalSettingsContainer'>
    <VolumeSlider/>
    <ModesThemeSwitcher/>
    <Settings/>
  </section>
);


export default AdditionalConfigs;
