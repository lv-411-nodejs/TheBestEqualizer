import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormComponent from '../../components/formComponent/formComponent';
import { formFieldsInfo } from '../../helpers/constants';
import { postUserData } from '../../store/actions/postUserDataAction';
import authImage from '../../assets/images/authImage.png';
import './authentication.css';

class Authentication extends Component {
    state = {
      isMember: true,
      userData: {},
    };

    onInputChange = ({ target: { name, value } }) => {
      const userData = { ...this.state.userData };
      userData[name] = value;
      this.setState({ userData });
    };

    onLinkClick = () => {
      const { isMember } = this.state;
      this.setState({ isMember: !isMember });
    };

    onFormSubmit = (submit) => {
      submit.preventDefault();
      const { userData: { username, email, password }, isMember } = this.state;
      const { history } = this.props;
      let path;
      let data;

      if (!isMember) {
        path = '/registration';
        data = { username, email, password };
      } else {
        path = '/login';
        data = { email, password };
      }
      this.props.onAuth(path, data, history);
    };

    filterFields = (arr, status) => (status ? arr.filter(el => status === el.isMember) : arr);

    render() {
      const { isMember, userData } = this.state;
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
              fieldsToRender={fildsToRender}
              onInputChange={this.onInputChange}
              onFormSubmit={this.onFormSubmit}
              userData={userData}
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
