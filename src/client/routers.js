import React from 'react';
import { Route, Switch } from 'react-router';
import Main from './containers/main/main';
import Login from './containers/login/login';
import Registration from './containers/registration/registration';

const Routers = () => {
  return (
    <Switch>
      <Route path='/' exact component={Main}/>
      <Route path='/login' component={Login}/>
      <Route path='/registration' component={Registration}/>
    </Switch>
  );
};

export default Routers;
