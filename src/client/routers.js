import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CheckAuth from './components/checkAuth';

import Main from './containers/main/main';
import Authentication from './containers/authentication/authentication';

const Routers = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Authentication} />
      <Route path="/main" component={CheckAuth(Main)} />
    </Switch>
  </BrowserRouter>
);

export default Routers;
