import React from 'react';

import './colorThemeSwitcher.css';

const ColorThemeSwitcher = () => (
  <div className="switchContainer">
    <label htmlFor="slider" className="switch">
      <input type="checkbox" />
      <span id="slider" className="slider" />
    </label>
    <span className="modes">Modes</span>
  </div>
);

export default ColorThemeSwitcher;
