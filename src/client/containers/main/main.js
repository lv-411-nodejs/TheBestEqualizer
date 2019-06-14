import React from 'react';
import { Link } from 'react-router-dom';
import AdditionalConfigs from '../../components/additionalConfigs/additionalConfigs';
import AppHeader from '../../components/appheader/appheader';

const Main = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <AdditionalConfigs/>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
    </React.Fragment>
  );
};

export default Main;
