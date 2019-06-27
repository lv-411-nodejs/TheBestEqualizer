import React from 'react';
import PropTypes from 'prop-types';

const StreamDetect = (props) =>
    (
        <span id="stream_detecting">{props.streamDetect}</span >
    );

StreamDetect.propTypes = {
    streamDetect: PropTypes.string.isRequired
};

export default StreamDetect;