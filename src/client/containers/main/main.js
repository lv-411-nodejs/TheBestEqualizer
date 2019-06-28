import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AdditionalConfigs from '../../components/additionalConfigs/additionalConfigs';
import SoundModes from '../../components/soundModes';
import AppHeader from '../../components/appheader/appheader';
import ComponentWithSliders from '../../components/componentWithSliders/componentWithSliders';
import './main.css';

const Main = () => (
  <Fragment>
    <AppHeader />
    <AdditionalConfigs />
    <SoundModes />
    <ComponentWithSliders />
    <Link to="/login">Login</Link>
    <Link to="/registration">Registration</Link>
  </Fragment>
);

export default Main;
