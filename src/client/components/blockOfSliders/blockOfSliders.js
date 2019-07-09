import React from 'react';
import PropTypes from 'prop-types';
import './blockOfSliders.css';
import OneSlider from '../slider';


const BlockOfSliders = ({ name, effects, setEffectsValue }) => (
  <div className="Sliders__block">
    <p className="Sliders__block--title">
      {name}
    </p>
    <div className="Sliders__block--sliders">
      {Object.keys(effects).map(effect => (
        <OneSlider
          blockName={name}
          effectName={effect}
          value={effects[effect]}
          key={effect}
          setEffectsValue={setEffectsValue}
        />
      ))
      }
    </div>
  </div>
);

BlockOfSliders.propTypes = {
  name: PropTypes.string,
  effects: PropTypes.instanceOf(Object),
  setEffectsValue: PropTypes.func,
};

export default BlockOfSliders;