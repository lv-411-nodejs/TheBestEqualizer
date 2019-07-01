import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './uploadButton.css';

const UploadButton = (props) => {
  const { handleInfoFromSound } = props;
  return (
    <label htmlFor="uplodSoundInput">
      {' '}
      <input
        name="uplodSoundInput"
        type="file"
        id="soundsource"
        accept="audio/mp3"
        className="UplodSoundInput"
        onChange={handleInfoFromSound}
      />
    </label>
  );
};

UploadButton.propTypes = {
  handleInfoFromSound: PropTypes.func.isRequired,
};

export default connect()(UploadButton);
