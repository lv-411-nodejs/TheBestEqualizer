import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './logoheader.png';

import './appheader.css';

const volumeIcon = <FontAwesomeIcon icon={faUser} />;

const AppHeader = () => (
  <section className="AppHeaderContainer">
    <div className="AppLogo">
      <img src={logo} alt="logo" />
    </div>
    <div className="UserName">{volumeIcon}UserName</div>
  </section>
);

export default AppHeader;
