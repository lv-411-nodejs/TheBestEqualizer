import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({
  onClick, className, icon, value, type,
}) => (
  <button
    type={type}
    className={className}
    onClick={onClick}
  >
    {icon}
    {' '}
    {value}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.instanceOf(Object),
  value: PropTypes.string,
};

export default Button;
