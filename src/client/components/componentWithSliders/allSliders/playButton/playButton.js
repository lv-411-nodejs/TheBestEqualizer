import React from 'react';

import './playButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";

const playIcon = <FontAwesomeIcon icon={faPlay}/>;
const pauseIcon = <FontAwesomeIcon icon={faPause}/>;

const PlayButton = ({onClick, playing}) => (
  playing ?
    <button className="PauseButton" onClick={onClick}>{pauseIcon} Pause</button> :
    <button className="PlayButton" onClick={onClick}>{playIcon} Play</button>
);

PlayButton.propTypes = {
  onClick: PropTypes.func,
  playing: PropTypes.bool
};

export default PlayButton;
