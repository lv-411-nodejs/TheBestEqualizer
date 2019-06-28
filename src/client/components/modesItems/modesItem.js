import React from 'react';
import './modesItem.css';

const ModesItem = (items) => {
  const { iconUrl, text } = items;
  return (
    <div>
      <button type="button" className="modesItem__button">
        {iconUrl}
        {text}
      </button>
    </div>
  );
};

export default ModesItem;
