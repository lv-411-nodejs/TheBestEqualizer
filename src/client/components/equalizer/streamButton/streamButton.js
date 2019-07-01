import React from 'react';
import PropTypes from 'prop-types';
import './streamButton.css';

const StartStopStreamButton = (props) => {
  const { onclickhandler } = props;
  return (
    <button
      type="button"
      onClick={onclickhandler}
      className="StreamButton"
    >
      Start stream
    </button>
  );
};

StartStopStreamButton.propTypes = {
  onclickhandler: PropTypes.func.isRequired,
};

export default StartStopStreamButton;
