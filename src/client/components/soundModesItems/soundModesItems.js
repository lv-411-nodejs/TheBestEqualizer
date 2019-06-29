import React from 'react';
import './soundModesItems.css';

const SoundModesItem = (items) => {
  const { iconUrl, text } = items;
  return (
    <div>
      <button type="button" className="ModesItem__button">
        {iconUrl}
        {text}
      </button>
    </div>
  );
};

export default SoundModesItem;
