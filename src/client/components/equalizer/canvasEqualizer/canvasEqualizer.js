import React from 'react';
import PropTypes from 'prop-types';


const GraphicEqualiser = ({ width, height, getCanvasEl }) => (  
    <canvas
      width={width}
      height={height}
      ref={getCanvasEl}  
    />
);

GraphicEqualiser.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,    
};

export default GraphicEqualiser;
