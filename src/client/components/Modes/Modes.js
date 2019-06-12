import React, { Component } from 'react';
import '../../styles/common.css';
import ModesItem from '../ModesItems/modesItem';
import { Image3d, ImageHeadSet, ImageSpeaker, ImageExtra } from 'src/images';

class Modes extends Component {
  render() {
    return (
      <div className="modes-container">
        <h3 className="modes-title">Modes</h3>
        <div className="modes">
          <ModesItem iconUrl={Image3d} text='3D' />
          <ModesItem iconUrl={ImageHeadSet} text='Headset' />
          <ModesItem iconUrl={ImageSpeaker} text='Speaker' />
          <ModesItem iconUrl={ImageExtra} text='Extra' />
        </div>
      </div> 
    );
  }
}

export default Modes