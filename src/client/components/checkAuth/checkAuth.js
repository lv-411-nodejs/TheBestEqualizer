import React from 'react';
import { Redirect } from 'react-router-dom';

const Auth = (ComponentToProtect) => {
  const AuthWrapper = () => {
    const token = localStorage.getItem('_token');
    return token ? <ComponentToProtect /> : <Redirect to="/" />;
  };
  return AuthWrapper;
};

export default Auth;
