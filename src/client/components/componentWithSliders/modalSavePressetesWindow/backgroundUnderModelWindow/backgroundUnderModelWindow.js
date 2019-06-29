import React from 'react';
import PropTypes from 'prop-types';
import './backgroundUnderModelWindow.css';

const BackgroundUnderModelWindow = (props) => {
  const { backgroundClick } = props;
  return (
    <button type="button" className="backgroundUnderModelWindow" onClick={backgroundClick} />
  );
};

BackgroundUnderModelWindow.propTypes = {
  backgroundClick: PropTypes.func.isRequired,
};

export default BackgroundUnderModelWindow;
