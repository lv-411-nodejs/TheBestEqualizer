import React from 'react';
import PropTypes from 'prop-types';
import './backgroundUnderModelWindow.css';

const BackgroundUnderModelWindow = (props) => {    
        const {backgroundClick,
                } = props;
        return ( 
    <div className="backgroundUnderModelWindow" onClick={backgroundClick}></div>
);
};

BackgroundUnderModelWindow.propTypes = {
    backgroundClick: PropTypes.func.isRequired
};

export default BackgroundUnderModelWindow;

