import React from 'react';
import { Link } from 'react-router-dom';
import AdditionalConfigs from '../../components/additionalConfigs/additionalConfigs';

const Main = () => {
  return (
    <React.Fragment>
      <AdditionalConfigs/>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
    </React.Fragment>
  );
};

export default Main;
