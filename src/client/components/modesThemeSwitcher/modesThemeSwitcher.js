import React from 'react';

import './modesThemeSwitcher.css';

const ModesThemeSwitcher = () => (
  <div className="switchContainer">
    <label htmlFor="slider" className="switch">
      <input type="checkbox" />
      <span id="slider" className="slider" />
    </label>
    <span className="modes">Modes</span>
  </div>
);

export default ModesThemeSwitcher;
