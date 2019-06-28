import React from 'react';
import PropTypes from 'prop-types';

const InfoAboutTrack = (props) => {
  const { trackname, tracksize, tracktype } = props;
  return (
    <details id="detailstrack">
      <summary>
        Tack name
        {trackname}
      </summary>
      <p>
        size is
        {(tracksize / 1024 / 1024).toFixed(2)}
        МБ
      </p>
      <p>
        type is
        {tracktype}
      </p>
    </details>
  );
};

InfoAboutTrack.propTypes = {
  trackname: PropTypes.string,
  tracksize: PropTypes.number,
  tracktype: PropTypes.string,
};

export default InfoAboutTrack;
