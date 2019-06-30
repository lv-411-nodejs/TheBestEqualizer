import React from 'react';
import { userIcon } from '../../assets/icons/icons';
import logo from './logo.svg';
import './mainPageHeader.css';

const MainPageHeader = () => (
  <section className="MainPageHeaderContainer">
    <div className="AppLogoContainer">
      <img src={logo} alt="logo" />
      <span className="Node">nodes</span>
      Equalizer
    </div>
    <div className="UserName">
      {userIcon}
      <span>Billie Eilish</span>
    </div>
  </section>
);

export default MainPageHeader;
