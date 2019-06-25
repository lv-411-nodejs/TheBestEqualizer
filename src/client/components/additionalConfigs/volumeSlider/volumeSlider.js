import React, {Component} from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import './volumeSlider.css';
import { volumeIcon } from '../../../assets/icons/icons'

class VolumeSlider extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      sliderValue: 20,
      maxValue: 100,
      minValue: 0
    };
  }
  handleOnChange = (sliderValue) => {
    this.setState({
      sliderValue
    });
  }
  render () {
    const { sliderValue, maxValue, minValue } = this.state;
    return (
      <div className='volumeContainer'>
        {volumeIcon}
        <Slider
          className='volumeContainer--slider'
          value={sliderValue}
          min={minValue}
          tooltip={false}
          max={maxValue}
          step={5}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default VolumeSlider;
