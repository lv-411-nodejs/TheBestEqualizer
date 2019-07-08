import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormComponent from '../../components/formComponent/formComponent';
import { formFieldsInfo } from '../../helpers/constants';
import postUserData from '../../actions/postUserDataAction';
import authImage from '../../assets/images/authImage.png';
import './authentication.css';

class Authentication extends Component {
    state = {
      isMember: true,
      user: {},
    };

    onInputChange = ({ target: { name, value } }) => {
      this.setState(({ user }) => {
        return user[name] = value;
      });
    };

    onLinkClick = () => {
      const { isMember } = this.state;
      this.setState({ 
        isMember: !isMember, 
        user: {}, 
      });
    };

    onFormSubmit = (submit) => {
      submit.preventDefault();
      const { user: {username, email, password}, isMember } = this.state;
      const { postUserData, history } = this.props;
      let path;
      let user;

      if (!isMember) {
        path = '/registration';
        user = { username, email, password };
      } else {
        path = '/login';
        user = { email, password };
      }

      postUserData(path, user, history);
    };

    filterFields = (arr, status) => (status ? arr.filter(el => status === el.isMember) : arr);

    render() {
      const { isMember, user } = this.state;
      const fildsToRender = this.filterFields(formFieldsInfo, isMember);
      const formTitle = isMember ? 'Login' : 'Registration';
      const message = isMember ? 'Dont have an account? Register!' : 'Already have an account? Login!';
      return (
        <div className="authentication">
          <img type="image/svg+xml" src={authImage} alt="Music band" className="authImage" />
          <div className="form-container">
            <h1 className="title">{formTitle}</h1>
            <FormComponent
              fieldsToRender={fildsToRender}
              onInputChange={this.onInputChange}
              onFormSubmit={this.onFormSubmit}
              user={user}
            />
            <input type="button" onClick={this.onLinkClick} className="message" value={message} />
          </div>
        </div>
      );
    }
}

Authentication.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  postUserData: PropTypes.func.isRequired,
};

export default connect(null, { postUserData })(withRouter(Authentication));
