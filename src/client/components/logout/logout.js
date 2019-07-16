import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { logoutIcon } from '../../assets/icons/icons';
import './logout.css';
import Button from '../button';

class Logout extends Component {
    SignOut = async () => {
      const { history } = this.props;
      history.push('/');
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

Logout.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Logout);
