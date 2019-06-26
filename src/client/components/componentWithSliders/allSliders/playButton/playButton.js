import React from 'react';

import './playButton.css';
import PropTypes from "prop-types";

const PlayButton = ({onClick, playing, className, icon, value}) => (
  <button className={className} onClick={onClick}>{icon} {value}</button>
);

PlayButton.propTypes = {
  onClick: PropTypes.func,
  playing: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.object,
  value: PropTypes.string
};

export default PlayButton;
