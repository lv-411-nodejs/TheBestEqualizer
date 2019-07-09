import React from 'react';

import {
  MainPageHeader,
  Equalizer,
  ComponentWithSliders,
} from '../../components';

import './main.css';

const Main = () => (
  <div className="main">
    <MainPageHeader />
    <Equalizer />
    <ComponentWithSliders />
  </div>
);

export default Main;
