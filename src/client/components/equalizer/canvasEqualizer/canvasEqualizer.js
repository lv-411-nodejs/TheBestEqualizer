import React from 'react';
import PropTypes from 'prop-types';
import './canvasEqualizer.css';

const GraphicEqualiser = ({ width, height, getCanvasEl }) => (
  <canvas
    width={width}
    height={height}
    ref={getCanvasEl}
    className="graphicCanvas"
  />
);

GraphicEqualiser.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  getCanvasEl: PropTypes.func.isRequired,
};

export default GraphicEqualiser;
