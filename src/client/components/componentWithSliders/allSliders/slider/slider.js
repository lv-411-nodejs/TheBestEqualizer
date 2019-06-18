import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import './slider.css';

class OneSlider extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      value: 0,
      maxValue: 4.4,
      minValue: -4.4
    };
  }

    handleChange = (value) => {
      this.setState({
        value: value.toFixed(2)
      });
    };

    render () {
      const { value, maxValue, minValue } = this.state;
      return (
        <Slider
          className='Sliders--slider'
          min={minValue}
          max={maxValue}
          value={value}
          step={0.001}
          orientation='vertical'
          onChange={this.handleChange}
        />
      );
    }
}

export default OneSlider;
