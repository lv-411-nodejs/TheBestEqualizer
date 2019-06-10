import { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

import Main from './containers/Main/Main'
import Registration from './containers/Registration/Registration'
import Login from './containers/Login/Login'

  componentDidMount () {
    fetch('/api/first')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render () {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}

export default withRouter(App)
