import React from 'react';

const ModesItem = (items) => {
  const { iconUrl, text } = items;
  return (
    <div>
      <button>
        <img src={iconUrl} />
        {text}
      </button>
    </div>
  );
};

export default ModesItem;
