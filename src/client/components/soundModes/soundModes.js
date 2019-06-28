import React from 'react';
import './soundModes.css';
import ModesItem from '../modesItems/modesItem';
import { imageArray } from '../../helpers/constants';

const SoundModes = () => {
  const fullModesItem = imageArray.map((item, i) => (
    <ModesItem
      key={i}
      iconUrl={item.img}
      text={item.text}
    />
  ));

  return (
    <div className="modes-container">
      <h3 className="modes-title">Modes</h3>
      <div className="modes">
        {fullModesItem}
      </div>
    </div>
  );
};

export default SoundModes;
