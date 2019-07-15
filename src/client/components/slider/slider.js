import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import './slider.css';

class OneSlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sliderValue: props.value,
      maxValue: 1,
      minValue: 0,
      step: 0.01,
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.setState({ sliderValue: value });
    }
  }

  handleChange = (sliderValue) => {
    const { blockName, effectName, setEffectsValue } = this.props;
    setEffectsValue(blockName, effectName, parseFloat(sliderValue.toFixed(2)));
    this.setState({ sliderValue: parseFloat(sliderValue.toFixed(2)) });
  };

  render() {
    const {
      sliderValue, maxValue, minValue, step,
    } = this.state;
    const { effectName } = this.props;
    return (
      <div>
        <Slider
          className="Sliders--slider"
          min={minValue}
          max={maxValue}
          value={sliderValue}
          step={step}
          orientation="vertical"
          onChange={this.handleChange}
        />
        <p className="Sliders--label">{effectName}</p>
      </div>
    );
  }
}

OneSlider.propTypes = {
  value: PropTypes.number,
  blockName: PropTypes.string,
  effectName: PropTypes.string,
  setEffectsValue: PropTypes.func,
};

export default OneSlider;
