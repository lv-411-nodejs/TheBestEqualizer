import React, { Component } from 'react';
import FormComponent from '../formComponent/formComponent';
import { formFieldsInfo } from '../../helpers/constants';
import authImage from '../../assets/images/authImage.png';
import './authentication.css';

class Authentication extends Component {
    state = {
      isMember: true,
    };

    onLinkClick = () => {
      const { isMember } = this.state;
      this.setState({ isMember: !isMember });
    };

    filterFields = (arr, status) => (status ? arr.filter(el => status === el.isMember) : arr);

    render() {
      const { isMember } = this.state;
      const fildsToRender = this.filterFields(formFieldsInfo, isMember);
      const formTitle = isMember ? 'Login' : 'Registration';
      const message = isMember ? 'Dont have an account? Register!' : 'Already have an account? Login!';
      return (
        <div className="authentication">
          <img
            type="image/svg+xml"
            src={authImage}
            alt="Music band"
            className="authImage"
          />
          <div className="form-container">
            <h1 className="title">{formTitle}</h1>
            <FormComponent
              isMember={isMember}
              fieldsToRender={fildsToRender}
            />
            <input
              type="button"
              onClick={this.onLinkClick}
              className="message"
              value={message}
            />
          </div>
        </div>
      );
    }
}

export default Authentication;
