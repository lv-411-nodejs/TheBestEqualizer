import React from 'react';
import PropTypes from 'prop-types';
import './blockOfSliders.css';
import OneSlider from '../slider/slider';

const BlockOfSliders = (props) => {
  const sliders = [];
  for (let i = 0; i < props.numOfSliders; i++) {
    sliders.push(<OneSlider key={i}/>);
  }

  return (
    <div className="Sliders__block">
      <p className="Sliders__block--title">{props.name}</p>
      <div className="Sliders__block--sliders">
        {sliders}
      </div>
    </div>
  );
};

BlockOfSliders.propTypes = {
  numOfSliders: PropTypes.number,
  name: PropTypes.string
};

export default BlockOfSliders;
