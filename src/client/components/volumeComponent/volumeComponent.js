import React, { Component, Fragment } from 'react';
import 'react-rangeslider/lib/index.css';
import './volumeComponent.css';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';
import { volumeIcon } from '../../assets/icons/icons';

class SwitcherSound extends Component {
  state = {
    volumeValueTrack: 0.25,
    volumeValueVoice: 0.25,
    track: null,
    voice: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { audioData: { sound, voice } } = props;
    const { volumeValueTrack, volumeValueVoice } = state;
    if (sound && sound.playing) {
      sound.volume = volumeValueTrack;
      return { track: sound };
    } if (voice && voice.playing) {
      voice.volume = volumeValueVoice;
      return { track: voice };
    }
    return null;
  }

  changeTracksOrVoiceVolume = () => {
    const {
      volumeValueTrack, volumeValueVoice, track, voice,
    } = this.state;
    if (track) {
      track.volume = volumeValueTrack;
    } else if (voice) {
      voice.volume = volumeValueVoice;
    }
  }

  changeVolume = (volumeValueTrack) => {
    this.setState({
      volumeValueTrack: parseFloat(volumeValueTrack.toFixed(2)),
      volumeValueVoice: parseFloat(volumeValueTrack.toFixed(2)),
    }, () => this.changeTracksOrVoiceVolume());
  }

  render() {
    const { volumeValueTrack } = this.state;
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
            value={volumeValueTrack}
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

export default connect(mapStateToProps)(SwitcherSound);
