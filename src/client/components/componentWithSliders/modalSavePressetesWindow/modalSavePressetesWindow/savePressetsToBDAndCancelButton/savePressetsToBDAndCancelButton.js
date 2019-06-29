import React from 'react';
import PropTypes from 'prop-types';

const SavePressetesToDBButton = (props) => {
  const {
    className,
    id,
    onClickHandler,
    buttonTitle,
  } = props;
  return (
    <button
      type="button"
      className={className}
      id={id}
      onClick={onClickHandler}
    >
      {buttonTitle}
    </button>
  );
};

SavePressetesToDBButton.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default SavePressetesToDBButton;
