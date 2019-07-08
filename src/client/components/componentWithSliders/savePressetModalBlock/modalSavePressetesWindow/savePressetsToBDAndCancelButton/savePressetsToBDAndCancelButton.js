import React from 'react';
import PropTypes from 'prop-types';

const SavePressetesToDBButton = ({
  className,
  id,
  onClickHandler,
  buttonTitle,
}) => (
  <button
    type="button"
    className={className}
    id={id}
    onClick={onClickHandler}
  >
    {buttonTitle}
  </button>
);

SavePressetesToDBButton.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  buttonTitle: PropTypes.string.isRequired,
};

export default SavePressetesToDBButton;
