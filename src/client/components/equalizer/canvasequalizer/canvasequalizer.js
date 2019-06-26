import React from 'react';
import PropTypes from 'prop-types';

const GraphicEqualiser = ({width, height, onChangeWidth}) => (
        <div>
            <canvas width = {width} height = {height}></canvas><br />
            <input type = "range" min = "100" max = "1000" step = "10" defaultValue = {width} name = "rangecanvas" id = "range" onChange = {onChangeWidth}/>
        </div>
        );

GraphicEqualiser.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onChangeWidth: PropTypes.func.isRequired   
  };

export default GraphicEqualiser;
