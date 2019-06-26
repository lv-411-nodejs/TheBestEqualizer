import React from 'react';
import { Link } from 'react-router-dom';
import AdditionalConfigs from '../../components/additionalConfigs/additionalConfigs';
import Modes from '../../components/modes/modes';
import AppHeader from '../../components/appheader/appheader';
import ComponentWithSliders from '../../components/componentWithSliders/componentWithSliders';
import SavePressetModalBlock from '../../components/componentWithSliders/modalsavewindow/savePressetModalBlock';


import './main.css';
const Main = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <AdditionalConfigs/>
      <Modes/>
      <ComponentWithSliders/>
      <SavePressetModalBlock/>      
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
    </React.Fragment>
  );
};

export default Main;
