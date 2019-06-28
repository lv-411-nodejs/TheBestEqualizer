import React from 'react';
import { userIcon } from '../../assets/icons/icons';
import logo from './logoheader.png';
import './mainPageHeader.css';

const MainPageHeader = () => (
  <section className="MainPageHeaderContainer">
    <div className="AppLogo">
      <img src={logo} alt="logo" />
    </div>
    <div className="UserName">
      {userIcon}
UserName
    </div>
  </section>
);

export default MainPageHeader;
