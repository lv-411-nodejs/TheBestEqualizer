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

const BlockOfSliders = (props) => (
  <div className="Sliders__block">
    <p className="Sliders__block--title">{props.name}</p>
    <div className="Sliders__block--sliders">
      {renderSliders(props.numOfSliders)}
    </div>
  </div>
);

BlockOfSliders.propTypes = {
  numOfSliders: PropTypes.number,
  name: PropTypes.string
};

export default BlockOfSliders;
