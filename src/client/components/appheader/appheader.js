import React from 'react';
import { userIcon } from '../../assets/icons/icons';
import logo from './logoheader.png';
import './appheader.css';

const AppHeader = () => (
  <section className="AppHeaderContainer">
    <div className="AppLogo">
      <img src={logo} alt="logo" />
    </div>
    <div className="UserName">
      {userIcon}
UserName
    </div>
  </section>
);

export default AppHeader;
