import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormField from '../../components/formField/formField';
import postUserData from '../../actions/postUserDataAction';
import getUserData from '../../actions/getUserDataAction';
import './formComponent.css';

class FormComponent extends Component {
    state = {
      userName: '',
      email: '',
      password: '',
    };


    onInputChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    };

    onRegistratuinSubmit = (e) => {
      e.preventDefault();
      const { userName, email, password } = this.state;
      const { history } = this.props;
      const newUser = {
        userName,
        email,
        password,
      };
      postUserData(newUser);
      history.push('/main');
    };

    onLoginSubmit = (e) => {
      e.preventDefault();
      const { history } = this.props;
      getUserData();
      history.push('/main');
    };


    render() {
      const { fieldsToRender, isMember } = this.props;
      const onSubmit = isMember ? this.onLoginSubmit : this.onRegistratuinSubmit;
      const formFields = fieldsToRender.map((el, i) => (
        <FormField
          key={i}
          onInputChange={this.onInputChange}
          el={el}
        />
      ));
      return (
        <div>
          <form onSubmit={onSubmit} className="form-body" autoComplete="off">
            {formFields}
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
};

const mapStateToProps = state => ({
  postUser: state.postUser.postUser,
  getUser: state.getUser.getUser,
});

export default connect(mapStateToProps)(withRouter(FormComponent));
