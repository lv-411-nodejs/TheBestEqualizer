import React from 'react';
import PropTypes from 'prop-types';

 const StartStopStreamButton = (props) => (
    <button onClick = {props.onclickhandler}>Start stream</button>
);

StartStopStreamButton.propTypes = {
    onclickhandler: PropTypes.func.isRequired
  };

  export default StartStopStreamButton;
  