import React from 'react';
import ModesThemeSwitcher from '../modesThemeSwitcher';
import Settings from '../settings';
import VolumeSlider from '../volumeSlider';

import './additionalConfigs.css';

const AdditionalConfigs = () => (
  <section className="additionalSettingsContainer">
    <VolumeSlider />
    <ModesThemeSwitcher />
    <Settings />
  </section>
);

export default AdditionalConfigs;
