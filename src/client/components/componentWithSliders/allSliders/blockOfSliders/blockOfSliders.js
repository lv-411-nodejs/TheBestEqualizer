import React from 'react';
import PropTypes from 'prop-types';
import './blockOfSliders.css';
import OneSlider from '../slider/slider';

const renderSliders = (numOfSliders) => {
  const sliders = [];
  for (let i = 0; i < numOfSliders; i++) {
    sliders.push(<OneSlider key={i}/>);
  }
  return sliders;
};

const BlockOfSliders = ({ name, numOfSliders }) => (
  <div className="Sliders__block">
    <p className="Sliders__block--title">
      {name}
    </p>
    <div className="Sliders__block--sliders">
      {renderSliders(numOfSliders)}
    </div>
  </div>
);

BlockOfSliders.propTypes = {
  name: PropTypes.string,
  numOfSliders: PropTypes.number
};

export default BlockOfSliders;
