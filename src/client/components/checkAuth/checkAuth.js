import React from 'react';
import { Redirect } from 'react-router-dom';

const CheckAuth = (ComponentToProtect) => {
  const AuthWrapper = () => {
    const token = localStorage.getItem('_token');
    return token ? <ComponentToProtect /> : <Redirect to="/" />;
  };
  return AuthWrapper;
};

export default CheckAuth;
