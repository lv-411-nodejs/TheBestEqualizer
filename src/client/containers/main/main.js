import React from 'react';
import { Link } from 'react-router-dom';
import AdditionalConfigs from '../../components/additionalConfigs/additionalConfigs';

import ComponentWithSliders from '../../components/componentWithSliders/componentWithSliders'

const Main = () => {
  return (
    <React.Fragment>
      <AdditionalConfigs/>
      <ComponentWithSliders/>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
    </React.Fragment>
  );
};

export default Main;
