import React from 'react';
import { Link } from 'react-router-dom';
import AdditionalConfigs from '../../components/additionalConfigs/additionalConfigs';
import AppHeader from '../../components/appheader/appheader';

import ComponentWithSliders from '../../components/componentWithSliders/componentWithSliders';

const Main = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <AdditionalConfigs/>
      <ComponentWithSliders/>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
    </React.Fragment>
  );
};

export default Main;
