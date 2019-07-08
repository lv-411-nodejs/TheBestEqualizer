import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RenderFormFields from '../../components/renderFormFields/renderFormFields';
import postUserData from '../../actions/postUserDataAction';
import Button from '../../components/button';
import './formComponent.css';

class FormComponent extends Component {
    state = {
      username: null,
      email: null,
      password: null,
    };

    onInputChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    };

    onFormSubmit = (event) => {
      event.preventDefault();
      const { username, email, password } = this.state;
      const { postUserData: post, isMember, history } = this.props;
      let path;
      let user;

      if (!isMember) {
        path = '/registration';
        user = { username, email, password };
      } else {
        path = '/login';
        user = { email, password };
      }

      post(path, user, history);
    };

    render() {
      const { fieldsToRender } = this.props;
      return (
        <div>
          <form
            onSubmit={this.onFormSubmit}
            className="form-body"
            autoComplete="off"
          >
            <RenderFormFields
              fieldsToRender={fieldsToRender}
              onInputChange={this.onInputChange}
            />
            <div className="field">
              <Button className="submit" value="Submit" type="submit" />
            </div>
          </form>
        </div>
      );
    }
}

FormComponent.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  fieldsToRender: PropTypes.instanceOf(Array).isRequired,
  isMember: PropTypes.bool.isRequired,
  postUserData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps, { postUserData })(withRouter(FormComponent));
