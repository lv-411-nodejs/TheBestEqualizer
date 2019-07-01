import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RenderFormFields from '../../components/renderFormFields/renderFormFields';
import postUserData from '../../actions/postUserDataAction';
import './formComponent.css';

class FormComponent extends Component {
    state = {
      username: '',
      email: '',
      password: '',
    };

    onInputChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    };

    onSubmit = (e) => {
      e.preventDefault();
      const { username, email, password } = this.state;
      const { postUserData, isMember, history} = this.props;
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

    render() {
      const { fieldsToRender } = this.props;
      return (
        <div>
          <form onSubmit={this.onSubmit} className="form-body" autoComplete="off">
            <RenderFormFields fieldsToRender={fieldsToRender} onInputChange={this.onInputChange} />
            <div className="field">
              <button type="submit" className="submit">Submit</button>
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
  postUserData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authStatus: state.authStatus
});

export default connect(mapStateToProps, {postUserData})(withRouter(FormComponent));
