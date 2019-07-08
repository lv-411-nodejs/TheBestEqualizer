import React, { Component, Fragment } from 'react';
import './switcherSound.css';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';

class SwitcherSound extends Component {
  state = {
    volumeValueTrack: 0.5,
    volumeValueVoice: 0.5,
    track: null,
    voice: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { audioData } = props;
    const { volumeValueTrack, volumeValueVoice } = state;
    if (audioData.sound && audioData.voice) {
      audioData.sound.volume = volumeValueTrack;
      audioData.voice.volume = volumeValueVoice;
      return { track: audioData.sound, voice: audioData.voice };
    }
    return null;
  }

  changeTracksVolume = () => {
    const {
      volumeValueTrack, volumeValueVoice, track, voice,
    } = this.state;
    track.volume = 1 - volumeValueTrack;
    voice.volume = 1 - volumeValueVoice;
  }

  changeVolume = (volumeValueTrack) => {
    this.setState({
      volumeValueTrack: parseFloat(volumeValueTrack.toFixed(2)),
      volumeValueVoice: parseFloat(1 - volumeValueTrack.toFixed(2)),
    }, () => this.changeTracksVolume());
  }

  render() {
    const { volumeValueTrack, track, voice } = this.state;
    const minSliderVolume = 0;
    const maxSliderVolume = 1;
    const stepSliderVolume = 0.001;
    return (
      <div className="SwitcherContainer">
        {track && voice.playing && (
        <Fragment>
          <span>Track</span>
          <Slider
            className="SwitcherContainer--slider"
            value={volumeValueTrack}
            min={minSliderVolume}
            max={maxSliderVolume}
            step={stepSliderVolume}
            onChange={this.changeVolume}
          />
          <span>Voice</span>
        </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  audioData: state.audioData,
});

export default connect(mapStateToProps)(SwitcherSound);
