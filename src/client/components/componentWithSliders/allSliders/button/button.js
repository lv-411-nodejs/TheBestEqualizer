import React from 'react';

import './button.css';
import PropTypes from "prop-types";

const Button = ({onClick, playing, className, icon, value}) => (
  <button className={className} onClick={onClick}>{icon} {value}</button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  playing: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.object,
  value: PropTypes.string
};

export default Button;
