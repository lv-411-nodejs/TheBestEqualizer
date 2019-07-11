import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logoutIcon } from '../../assets/icons/icons';
import './logout.css';
import Button from '../button';
// import fetchRequest from '../../helpers/fetchRequest';

class Logout extends Component {
    state ={
      redirect: false,
    };

    SignOut = () => {
      // fetchRequest.post('/logout')
      //   .then(() => {
      //     localStorage.removeItem('_token');
      //     this.setState({ redirect: true });
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      this.setState({ redirect: true });
      console.log(this.state.redirect);
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
      if (this.state.redirect) {
        return (<Redirect to="" />);
      }
      return (
        <div>
          { LogoutButton }
        </div>
      );
    }
}
export default Logout;
