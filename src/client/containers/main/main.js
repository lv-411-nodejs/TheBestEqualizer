import React from 'react';

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
  </div>
);

export default Main;
