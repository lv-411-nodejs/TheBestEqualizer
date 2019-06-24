import React from 'react';
import PropTypes from 'prop-types';

import './stopButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop } from '@fortawesome/free-solid-svg-icons';

const stopIcon = <FontAwesomeIcon icon={faStop}/>;

const StopButton = ({onClick}) => (
  <button className="StopButton" onClick={onClick}>{stopIcon} Stop</button>
);

StopButton.propTypes = {
  onClick: PropTypes.func
};

export default StopButton;
