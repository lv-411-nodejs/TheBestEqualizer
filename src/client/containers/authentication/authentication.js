import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormComponent from '../../components/formComponent';
import { fieldsInfo } from '../../helpers/constants';
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
      const { history, onAuth } = this.props;
      const { data, path } = this.isMemberInfo([], isMember, userData);
      const validationRes = formValidation(data);

      if (Object.keys(validationRes).length === 0) {
        const serverError = await onAuth(path, data, history);
        if (typeof serverError === 'object') {
          console.log('dsdfdsf')
          this.setState({ validationErrors: serverError });
        }
      } else {
        this.setState({ validationErrors: validationRes });
      }
    };

    isMemberInfo = (info, status, {
      username, email, password, passwordConfirmation,
    }) => (status ? {
      fildsToRender: info.filter(el => status === el.isMember),
      formTitle: 'Login',
      message: 'Dont have an account? Register!',
      path: '/login',
      data: { email, password },
    } : {
      fildsToRender: info,
      formTitle: 'Registration',
      message: 'Already have an account? Login!',
      path: '/registration',
      data: {
        username, email, password, passwordConfirmation,
      },
    });

    render() {
      const { isMember, userData, validationErrors } = this.state;
      const { fildsToRender, formTitle, message } = this.isMemberInfo(fieldsInfo, isMember, {});
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
