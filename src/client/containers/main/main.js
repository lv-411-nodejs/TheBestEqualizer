import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  AdditionalConfigs,
  SoundModes,
  MainPageHeader,
  Equalizer,
  ComponentWithSliders,
} from '../../components';

import './main.css';

const Main = () => (
  <Fragment>
    <MainPageHeader />
    <AdditionalConfigs />
    <SoundModes />
    <Equalizer />
    <ComponentWithSliders />    
    <Link to="/login">Login</Link>
    <Link to="/registration">Registration</Link>
  </Fragment>
);

export default Main;
