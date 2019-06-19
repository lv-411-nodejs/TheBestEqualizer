import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Main from './containers/main/main';
import Autentification from './containers/autentification/autentification';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Autentification}/>
        <Route path='/main' component={Main}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
