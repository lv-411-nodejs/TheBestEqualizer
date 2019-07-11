import React, { Component } from 'react';
import { logoutIcon } from '../../assets/icons/icons';
import './logout.css';
import Button from '../button';
import { Redirect } from 'react-router-dom';
import fetchRequest from '../../helpers/fetchRequest';

class Logout extends Component {
    state ={
      auth: false,
    }

    SignOut = () => {
      fetchRequest.post('/logout')
        .then(() => {
          localStorage.removeItem('_token');
          this.setState()
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
      return (
        <div>
          { LogoutButton }
        </div>
      );
    }
}
export default Logout;
