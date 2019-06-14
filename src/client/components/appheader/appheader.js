import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './appheader.css';

const volumeIcon = <FontAwesomeIcon icon={faUser} />;

const AppHeader = () => {
  return (
    <section className='AppHeaderContainer'>
      <div className= 'AppLogo'>
        Logo
      </div>
      <div className= 'UserName'>
        {volumeIcon}UserName
      </div>
    </section>
  );
};

export default AppHeader;
