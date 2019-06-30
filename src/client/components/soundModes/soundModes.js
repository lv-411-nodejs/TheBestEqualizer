import React from 'react';
import './soundModes.css';
import SoundModesItem from '../soundModesItems';
import { imageArray } from '../../helpers/constants';

const SoundModes = () => {
  const fullModesItem = imageArray.map((item, i) => (
    <SoundModesItem
      key={i}
      iconUrl={item.img}
      text={item.text}
    />
  ));

  return (
    <div className="Modes-container">
      <p className="Modes-title">Sound Modes</p>
      <div className="Modes">
        {fullModesItem}
      </div>
    </div>
  );
};

export default SoundModes;
