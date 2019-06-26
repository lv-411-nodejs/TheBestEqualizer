import React from 'react';

import './button.css';
import PropTypes from 'prop-types';

const Button = ({
  onClick, className, icon, value,
}) => (
  <button type="button" className={className} onClick={onClick}>
    {icon}
    {' '}
    {value}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.instanceOf(Object),
  value: PropTypes.string,
};

export default Button;
