import React from 'react';
import PropTypes from 'prop-types';

const InfoAboutTrack = (props) => (
        <details id="detailstrack">
            <summary>Tack name {props.trackname}</summary>
            <p>size is {(props.tracksize/1024/1024).toFixed(2)}МБ</p>
            <p>type is {props.tracktype}</p>
        </details>);

InfoAboutTrack.propTypes = {
    trackname: PropTypes.string,
    tracksize: PropTypes.number,
    tracktype: PropTypes.string
  };

export default InfoAboutTrack;
