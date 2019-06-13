import React from 'react';

const ModesItem = (props) => {
    const { iconUrl, text } = props;
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
