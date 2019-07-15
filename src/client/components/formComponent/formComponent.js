import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RenderFormFields from '../renderFormFields';
import Button from '../button';
import Spinner from '../../assets/images/spinner.gif';
import './formComponent.css';

const FormComponent = props => (
  <form onSubmit={props.onFormSubmit} className="form-body" autoComplete="off">
    <RenderFormFields
      fieldsToRender={props.fieldsToRender}
      onInputChange={props.onInputChange}
      userData={props.userData}
      validationErrors={props.validationErrors}
    />
    <div className="field">
      <Button
        className="submit"
        value={props.loading ? <img src={Spinner} alt="Authentication spinner" /> : 'Submit'}
        type="submit"
        disabled={props.loading ? 'disabled' : null}
      />
    </div>
  </form>
);

FormComponent.propTypes = {
  fieldsToRender: PropTypes.instanceOf(Array).isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
  validationErrors: PropTypes.instanceOf(Object),
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.authStatus.loading,
});

export default connect(mapStateToProps)(FormComponent);
