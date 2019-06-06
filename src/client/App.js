import React, { Component } from 'react';
import './app.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Main from './containers/Main/Main';
import Registration from './containers/Registration';
import Login from './containers/Login/Login';

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/auth" component={Login} />
        <Route path="/regist" component={Registration} />
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

export default withRouter(App);
