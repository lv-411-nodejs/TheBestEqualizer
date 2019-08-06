import React, { Component, Fragment } from 'react';
import 'react-rangeslider/lib/index.css';
import './volumeComponent.css';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';
import { volumeIcon } from '../../assets/icons/icons';

export class VolumeComponent extends Component {
  state = {
    volumeValueSound: 0.25,
    sound: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { audioData: { sound, voice } } = props;
    const { volumeValueSound } = state;
    if (sound && sound.playing) {
      sound.volume = volumeValueSound;
      return { sound };
    }
    if (voice && voice.playing) {
      voice.volume = volumeValueSound;
      return { sound: voice };
    }
    return null;
  }

  changeTracksOrVoiceVolume = () => {
    const {
      volumeValueSound, sound,
    } = this.state;
    if (sound) {
      sound.volume = volumeValueSound;
    }
  }

  changeVolume = (volumeValueSound) => {
    this.setState({
      volumeValueSound: parseFloat(volumeValueSound.toFixed(2)),
    }, () => this.changeTracksOrVoiceVolume());
  }

  render() {
    const { volumeValueSound } = this.state;
    const minSliderVolume = 0;
    const maxSliderVolume = 0.5;
    const stepSliderVolume = 0.001;
    return (
      <div className="SwitcherContainer">
        <Fragment>
          <span>
            {volumeIcon}
            {' '}
Volume
          </span>
          <Slider
            className="SwitcherContainer--slider"
            value={volumeValueSound}
            min={minSliderVolume}
            max={maxSliderVolume}
            step={stepSliderVolume}
            onChange={this.changeVolume}
          />
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  audioData: state.audioData,
});

export default connect(mapStateToProps)(VolumeComponent);
