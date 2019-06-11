import React, { Component } from 'react';
import '../../styles/common.css';
import ModesItem from '../ModesItems/modesItem';
import Image3d from '../../images/baseline-3d_rotation-24px.svg';
import ImageHeadSet from '../../images/headphones-alt-solid.svg';
import ImageSpeaker from '../../images/broadcast.svg';
import ImageExtra from '../../images/iconfinder_46_111100.svg'

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