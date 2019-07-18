import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { logoutIcon } from '../../assets/icons/icons';
import './logout.css';
import Button from '../button';

class Logout extends Component {
    SignOut = () => {
      const { sound, voice } = this.props.audioData;
      const { history } = this.props;
      if (sound) {
        sound.stop();
        voice.stop();
      }
      history.push('/');
    }

    render() {
      return (
        <Button
          className="ButtonStyleTemplate"
          icon={logoutIcon}
          value="Logout"
          onClick={this.SignOut}
        />
      );
    }
}

Logout.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  audioData: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  audioData: state.audioData,
});

export default connect(mapStateToProps)(withRouter(Logout));
