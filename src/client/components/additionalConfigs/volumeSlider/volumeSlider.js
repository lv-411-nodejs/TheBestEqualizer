import React from 'react';
import Slider from 'react-rangeslider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import 'react-rangeslider/lib/index.css';
import './volumeSlider.css';

const volumeIcon = <FontAwesomeIcon icon={faVolumeUp} />;

class VolumeSlider extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      value: 20,
      maxValue: 100,
      minValue: 0
    };
  }
  handleOnChange = (value) => {
    this.setState({
      value: value
    });
  }
  render () {
    const { value, maxValue, minValue } = this.state;
    return (
      <div className='volumeContainer'>
        {volumeIcon}
        <Slider
          className='volumeContainer--slider'
          value={value}
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
