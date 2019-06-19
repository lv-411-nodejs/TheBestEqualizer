import React from 'react';
import './modes.css';
import ModesItem from '../modesItems/modesItem';
import imageArray from '../../helpers/constants';

const Modes = () => {
  const fullModesItem = imageArray.map((item, index) => <ModesItem key={index} iconUrl={item.img} text={item.text} />);

  return (
    <div className="modes-container">
      <h3 className="modes-title">Modes</h3>
      <div className="modes">
        {fullModesItem}
      </div>
    </div>
  );
};

export default Modes;
