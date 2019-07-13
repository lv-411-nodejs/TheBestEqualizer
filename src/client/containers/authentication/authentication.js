import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormComponent from '../../components/formComponent';
import { formFieldsInfo } from '../../helpers/constants';
import { formValidation } from '../../helpers/formValidation';
import { postUserData } from '../../store/actions/postUserDataAction';
import authImage from '../../assets/images/authImage.png';
import './authentication.css';

class Authentication extends Component {
    state = {
      isMember: true,
      userData: {},
      validationErrors: {},
    };

    onInputChange = ({ target: { name, value } }) => {
      const userData = { ...this.state.userData };
      userData[name] = value;
      this.setState({ userData });
    };

    onLinkClick = () => {
      const { isMember } = this.state;
      this.setState({ isMember: !isMember, userData: {}, validationErrors: {} });
    };

    onFormSubmit = async (submit) => {
      submit.preventDefault();
      const { userData, isMember } = this.state;
      const {
        username, email, password, passwordConfirmation,
      } = userData;
      const { history, onAuth } = this.props;
      let path;
      let data;

      if (!isMember) {
        path = '/registration';
        data = {
          username,
          email,
          password,
          passwordConfirmation,
        };
      } else {
        path = '/login';
        data = {
          email,
          password,
        };
      }
      const validationRes = formValidation(data);
      if (Object.keys(validationRes).length === 0) {
        const serverError = await onAuth(path, data, history);
        this.setState({ validationErrors: serverError });
      } else {
        this.setState({ validationErrors: validationRes });
      }
    };

    contentToRender = (fieldsinfo, statusMember) => {
      let content;
      if (statusMember) {
        content = {
          fildsToRender: fieldsinfo.filter(el => statusMember === el.isMember),
          formTitle: 'Login',
          message: 'Dont have an account? Register!',
        };
      } else {
        content = {
          fildsToRender: fieldsinfo,
          formTitle: 'Login',
          message: 'Dont have an account? Register!',
        };
      }

      return content;
    };

    render() {
      const { isMember, userData, validationErrors } = this.state;
      const { fildsToRender, formTitle, message } = this.contentToRender(formFieldsInfo, isMember);
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
              fieldsToRender={fildsToRender}
              onInputChange={this.onInputChange}
              onFormSubmit={this.onFormSubmit}
              userData={userData}
              validationErrors={validationErrors}
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

Authentication.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  onAuth: PropTypes.func,
};

const mapDispatchToProps = {
  onAuth: postUserData,
};

export default connect(null, mapDispatchToProps)(withRouter(Authentication));
