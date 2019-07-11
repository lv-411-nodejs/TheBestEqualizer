import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';
import 'react-rangeslider/lib/index.css';
import { connect } from 'react-redux';

import './slider.css';

class OneSlider extends Component {
  constructor(props, context) {
    super(props, context);
    const {
      value, maxValue, minValue, step,
    } = props.effectValues;

    this.state = {
      sliderValue: value,
      maxValue,
      minValue,
      step,
    };
  }
  setEffectsValue = (blockName, effectsName, value) => {
    const { blocksData } = this.props;
    blocksData.map(({ name, effects, createEffect }) => {
      if (name === blockName) {
        effects[effectsName] = value;
        createEffect[effectsName] = effects[effectsName];
      }
    });
  };

  setEffectsValue = (sliderValue) => {
    const { blocksData, blockName, effectName } = this.props;
    blocksData.forEach(({ name, effects, createEffect }) => {
      if (name === blockName) {
        effects[effectName].value = sliderValue;
        createEffect[effectName] = effects[effectName].value;
      }
    });
    this.setState({ sliderValue: parseFloat(sliderValue.toFixed(2)) });
  };

  render() {
    const {
      sliderValue, maxValue, minValue, step,
    } = this.state;
    const { effectName } = this.props;
    return (
      <div>
        <span className="Slider--value">{maxValue}</span>
        <Slider
          className="Sliders--slider"
          min={minValue}
          max={maxValue}
          value={sliderValue}
          step={step}
          orientation="vertical"
          onChange={this.setEffectsValue}
        />
        <span className="Slider--value">{sliderValue}</span>
        <p className="Slider--label">{effectName}</p>
      </div>
    );
  }
}

OneSlider.propTypes = {
  value: PropTypes.number,
  blockName: PropTypes.string,
  effectName: PropTypes.string,
  effectValues: PropTypes.instanceOf(Object),
  blocksData: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
  blocksData: state.blocksData,
});

export default connect(mapStateToProps)(OneSlider);
