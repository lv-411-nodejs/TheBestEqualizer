import React from 'react';
import PropTypes from 'prop-types';
import './savePresetsButton.css';
import { saveIcon } from '../../assets/icons/icons';

const SavePresetsButton = (props) => {
  const { showHideModalBlock } = props;
  return (
    <button type="button" className="SavePresetsButton" onClick={showHideModalBlock}>
      {' '}
      {saveIcon}
      {' '}
    Save Preset
    </button>
  );
};

SavePresetsButton.propTypes = {
  showHideModalBlock: PropTypes.func.isRequired,
};

export default SavePresetsButton;
