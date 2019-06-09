import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import Main from './containers/Main/Main'
import Registration from './containers/Registration/Registration'
import Login from './containers/Login/Login'

import './app.css'

class App extends Component {
  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Redirect to="/" />
      </Switch>
    )
    return routes
  }
}

export default withRouter(App)
