import React from 'react';
import ColorThemeSwitcher from '../colorThemeSwitcher';
import VolumeSlider from '../volumeSlider';

import './additionalConfigs.css';

const AdditionalConfigs = () => (
  <section className="AdditionalSettingsContainer">
    <VolumeSlider />
    <ColorThemeSwitcher />
  </section>
);

export default AdditionalConfigs;
