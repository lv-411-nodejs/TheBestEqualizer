import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logoutIcon } from '../../assets/icons/icons';
import './logout.css';
import Button from '../button';
import fetchRequest from '../../helpers/fetchRequest';

class Logout extends Component {
    state ={
      auth: false,
    };

    SignOut = () => {
      fetchRequest.post('/logout')
        .then(() => {
          localStorage.removeItem('_token');
          this.setState({ auth: true });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render() {
      const LogoutButton = (
        <Button
          className="ButtonStyleTemplate"
          icon={logoutIcon}
          value="Logout"
          onClick={this.SignOut}
        />
      );
      const red = this.state.auth ? <Redirect to={this.props.history.push('/main')} /> : null;
      return (
        <div>
          { LogoutButton }
        </div>
      );
    }
}
export default Logout;
