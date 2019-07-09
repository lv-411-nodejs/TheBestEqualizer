import React from 'react';
import { Link } from 'react-router-dom';

import {
  MainPageHeader,
  Equalizer,
  TrackDuration,
  SwitcherSound,
  ComponentWithSliders,
} from '../../components';

import './main.css';

const Main = () => (
  <div className="main">
    <MainPageHeader />
    <Equalizer />
    <TrackDuration />
    <SwitcherSound />
    <ComponentWithSliders />
    <Link to="/login">Login</Link>
    <Link to="/registration">Registration</Link>
  </div>
);

export default Main;
