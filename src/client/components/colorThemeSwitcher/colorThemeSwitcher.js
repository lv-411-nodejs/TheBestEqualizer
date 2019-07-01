import React from 'react';

import './colorThemeSwitcher.css';

const ColorThemeSwitcher = () => (
  <div className="SwitchContainer">
    <label htmlFor="slider" className="Switch">
      <input type="heckbox" />
      <span id="slider" className="Slider" />
    </label>
    <span className="ModesSpan">Dark theme</span>
  </div>
);

export default ColorThemeSwitcher;
