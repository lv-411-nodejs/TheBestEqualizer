import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Main from './containers/main/main';
import Registration from './containers/registration/registration';
import Login from './containers/login/login';

class Routers extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Redirect to="/" />
      </Switch>
    );
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default withRouter(Routers);
