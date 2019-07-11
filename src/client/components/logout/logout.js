import React, { Component } from 'react';
import { logoutIcon } from '../../assets/icons/icons';
import './logout.css';

class Logout extends Component {

    SignOut = (e) => {
        console.log(e);
    }
      
  render() {
    return (
      <button type="button" onClick={this.SignOut} className="logout">
        {this.renderRedirect()}
        {logoutIcon}
        Logout
      </button>
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
