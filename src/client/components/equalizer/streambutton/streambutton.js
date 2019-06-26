import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';

 const StartStopStreamButton = (props) => (
    <button onClick = {props.onclickhandler}>Start stream</button>
);

StartStopStreamButton.propTypes = {
    onclickhandler: PropTypes.func.isRequired
  };

  export default StartStopStreamButton;
  