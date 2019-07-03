import React from 'react';
import PropTypes from 'prop-types';
import './infoAboutUploadFile.css';
import { musicIcon } from '../../../../assets/icons/icons';

const InfoAboutTrack = (props) => {
  const { trackname } = props;
  return (
    <div id="detailstrack">
      {musicIcon}
      <span className="TrackName">Track name:</span>
      {' '}
      {trackname}
    </div>
  );
};

InfoAboutTrack.propTypes = {
  trackname: PropTypes.string,
};

export default InfoAboutTrack;
