import React from 'react';
import PropTypes from 'prop-types';
import './streamDetect.css';

const StreamDetect = (props) => {
  const { streamDetect } = props;
  return (
    <span id="stream_detecting">
      {streamDetect}
    </span>
  );
};

StreamDetect.propTypes = {
  streamDetect: PropTypes.string.isRequired,
};

export default StreamDetect;
