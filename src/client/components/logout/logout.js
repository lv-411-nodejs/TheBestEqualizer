import React, { Component } from 'react';
import { logoutIcon } from '../../assets/icons/icons';
import './logout.css';
import Button from '../button';

class Logout extends Component {
    SignOut = (e) => {
      console.log(e);
    }

    render() {
      return (
        <div>
          <Button
            className="ButtonStyleTemplate ButtonLogoutTemplate"
            type="button"
            onClick={this.SignOut}
            icon={logoutIcon}
            value="Logout"
          />
        </div>
      //   <div className="logout">
      //     {logoutIcon}
      //     <a href="/" onClick={this.SignOut}>
      //     Logout
      //     </a>
      //   </div>
      );
    }
}
export default Logout;
