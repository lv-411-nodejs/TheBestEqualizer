import React from 'react';
import PropTypes from 'prop-types';

const Infoabouttrack=(props)=>{
    return(
        <details id="detailstrack">
            <summary>Tack name {props.trackname}</summary>
            <p>size is {(props.tracksize/1024/1024).toFixed(2)}МБ</p>
            <p>type is {props.tracktype}</p>
        </details>);
};

Infoabouttrack.propTypes = {
    trackname: PropTypes.string.isRequired,
    tracksize: PropTypes.number.isRequired,
    tracktype: PropTypes.string.isRequired
  };

export default Infoabouttrack;
