import React from 'react';
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
  <div className="main">
    <MainPageHeader />
    <AdditionalConfigs />
    <SoundModes />
    <Equalizer />
    <ComponentWithSliders />
    <Link to="/login">Login</Link>
    <Link to="/registration">Registration</Link>
  </div>
);

export default Main;
