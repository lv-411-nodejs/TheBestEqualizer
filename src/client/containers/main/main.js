import React from 'react';
import { Link } from 'react-router-dom';
import {
  AdditionalConfigs,
  SoundModes,
  MainPageHeader,
  Equalizer,
  SwitcherSound,
  TrackDuration,
  ComponentWithSliders,
} from '../../components';

import './main.css';

const Main = () => (
  <div className="main">
    <MainPageHeader />
    <AdditionalConfigs />
    <SoundModes />
    <Equalizer />
    <SwitcherSound />
    <TrackDuration />
    <ComponentWithSliders />
    <Link to="/login">Login</Link>
    <Link to="/registration">Registration</Link>
  </div>
);

export default Main;
