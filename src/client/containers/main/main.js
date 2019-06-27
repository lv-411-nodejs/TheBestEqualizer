import React from 'react';
import { Link } from 'react-router-dom';
import AdditionalConfigs from '../../components/additionalConfigs/additionalConfigs';
import Modes from '../../components/modes/modes';
import AppHeader from '../../components/appheader/appheader';
import ComponentWithSliders from '../../components/componentWithSliders/componentWithSliders';
import './main.css';

const Main = () => (
  <React.Fragment>
    <AppHeader />
    <AdditionalConfigs />
    <Modes />
    <ComponentWithSliders />
    <Link to="/login">Login</Link>
    <Link to="/registration">Registration</Link>
  </React.Fragment>
);

export default Main;
