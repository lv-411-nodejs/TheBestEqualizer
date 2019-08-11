import React from 'react';
import PropTypes from 'prop-types';
import './blockOfSliders.css';
import OneSlider from '../slider';
import { efValues } from '../../helpers/constants';


const BlockOfSliders = ({ name, effects }) => (
  <div className="Sliders__block">
    <p className="Sliders__block--title">
      {name}
    </p>
    <div className="Sliders__block--sliders">
      {Object.keys(effects).map(effect => (
        <OneSlider
          blockName={name}
          effectName={effect}
          effectValues={{...efValues[name][effect], value: effects[effect]}}
          key={effect}
        />
      ))
      }
    </div>
  </div>
);

BlockOfSliders.propTypes = {
  name: PropTypes.string,
  effects: PropTypes.instanceOf(Object),
};

export default BlockOfSliders;
