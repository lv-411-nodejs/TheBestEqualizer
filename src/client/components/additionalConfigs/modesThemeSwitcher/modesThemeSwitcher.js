import React from 'react';

import './modesThemeSwitcher.css';

const ModesThemeSwitcher = () => {
  return (
    <div className='switchContainer'>
      <label className='switch'>
        <input type="checkbox"/><span className='slider'></span>
      </label>
      <span className='modes'>Modes</span>
    </div>
  );
};

export default ModesThemeSwitcher;
