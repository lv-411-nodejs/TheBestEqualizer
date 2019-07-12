import React from 'react';

import {
  MainPageHeader,
  Equalizer,
  SwitcherSound,
  ComponentWithSliders,
} from '../../components';

import './main.css';

const Main = () => (
  <div className="main">
    <MainPageHeader />
    <Equalizer />
    <SwitcherSound />
    <ComponentWithSliders />
  </div>
);

export default Main;
