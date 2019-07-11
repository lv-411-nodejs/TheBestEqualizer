import React, { Component } from 'react';
import { logoutIcon } from '../../assets/icons/icons';
import './logout.css';
import Button from '../button';

class Logout extends Component {
    SignOut = () => {
      localStorage.removeItem(_token);
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
