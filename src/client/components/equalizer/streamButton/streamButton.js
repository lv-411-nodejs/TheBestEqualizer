import React from 'react';
import PropTypes from 'prop-types';

const StartStopStreamButton = (props) => {
  const { onclickhandler } = props;
  return (
    <button type="button" onClick={onclickhandler}>
      Start stream
    </button>
  );
};

StartStopStreamButton.propTypes = {
  onclickhandler: PropTypes.func.isRequired,
};

export default StartStopStreamButton;
