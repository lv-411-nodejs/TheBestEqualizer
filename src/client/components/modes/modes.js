import React from 'react';
import './modes.css';
import ModesItem from '../ModesItems/modesItem';
import { Image3d, ImageHeadSet, ImageSpeaker, ImageExtra } from 'src/images';

const Modes = () => {
  const imageArray = [{
    img: Image3d,
    text: '3D' }, {
    img: ImageHeadSet,
    text: 'HeadSet' }, {
    img: ImageSpeaker,
    text: 'Speaker' }, {
    img: ImageExtra,
    text: 'Extra'
  }];
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
