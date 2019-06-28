import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UploadButton = (props) => {
  const { handleInfoFromSound } = props;
  return (
    <label htmlFor="uplodSoundInput">
      {' '}
    Виберіть трек для завантаження
      <input name="uplodSoundInput" type="file" id="soundsource" accept="audio/mp3" onChange={handleInfoFromSound} />
    </label>
  );
};

UploadButton.propTypes = {
  handleInfoFromSound: PropTypes.func.isRequired,
};

export default connect()(UploadButton);
