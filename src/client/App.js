import { Component } from 'react';
import './app.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Main from './containers/Main/Main';
import Registration from './containers/Registration/Registration';
import Login from './containers/Login/Login';

<<<<<<< HEAD
  componentDidMount () {
    fetch('/api/first')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render () {
    const { username } = this.state;
=======
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
>>>>>>> added client folder structure, material-ui, css modules, simple react routering
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
