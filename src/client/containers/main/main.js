import React from 'react';
import { Link } from 'react-router-dom';
import AdditionalConfigs from '../../components/additionalConfigs/additionalConfigs';
import Modes from '../../components/modes/modes';
import AppHeader from '../../components/appheader/appheader';
import ComponentWithSliders from '../../components/componentWithSliders/componentWithSliders';
import SavePressetesModalWindow from '../../components/componentWithSliders/modalsavewindow/modalsavewindow'

const Main = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <AdditionalConfigs/>
      <Modes/>
      <ComponentWithSliders/>
      <SavePressetesModalWindow/>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
    </React.Fragment>
  );
};

export default Main;
