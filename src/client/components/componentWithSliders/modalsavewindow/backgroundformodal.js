import React from 'react';
import PropTypes from 'prop-types';
import './modalSaveWindow.css';

const SubstrateElement = (props) => (
    <div className="substrateElement" onClick={props.onclick}></div>
);

SubstrateElement.propTypes = {
    onclick: PropTypes.func.isRequired
};

export default SubstrateElement;

