import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Auth from './components/checkAuth';

import Main from './containers/main/main';
import Authentication from './containers/authentication/authentication';

const Routers = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/authentication" exact component={Authentication} />
      <Route path="/main" component={Auth(Main)} />
    </Switch>
  </BrowserRouter>
);

export default Routers;
