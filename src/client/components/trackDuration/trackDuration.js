import React, { Component } from 'react';
import 'react-rangeslider/lib/index.css';
import './trackDuration.css';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';
import VolumeComponent from '../volumeComponent/volumeComponent';
import SwitcherSound from '../switcherSound/switcherSound';

class TrackDuration extends Component {
    state = {
      duration: null,
      currentTime: null,
      playing: false,
      startPlayTime: null,
      onToggle: true,
    }

    static getDerivedStateFromProps(props, state) {
      const { audioData: { sound, trackName } } = props;
      if (sound && sound.sourceNode) {
        if (sound && sound.sourceNode && state.startPlayTime === null && sound.playing) {
          return {
            startPlayTime: new Date(),
            duration: Math.round(sound.sourceNode.buffer.duration),
            playing: sound.playing,
            trackName,
          };
        }
        return {
          duration: Math.round(sound.sourceNode.buffer.duration),
          playing: sound.playing,
          trackName,
        };
      }
      return null;
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.playing !== undefined && !prevState.playing && this.state.playing) {
        this.setState({ startPlayTime: new Date(new Date() - prevState.currentTime * 1000) });
        if (prevState.trackName !== this.state.trackName) {
          this.setState({ startPlayTime: new Date() });
        }
      } else if (this.state.startPlayTime) {
        this.calculateCurrentTime();
      }
    }

    formatingSongTime = (numberOfSecs) => {
      const seconds = numberOfSecs % 3600;
      let min = (Math.floor(seconds / 60)).toFixed();
      let sec = (seconds % 60).toFixed();

      min = String(min).padStart(2, '0');
      sec = String(sec).padStart(2, '0');
      return `${min}:${sec}`;
    }

    calculateCurrentTime = () => {
      const { audioData: { sound } } = this.props;
      if (this.state.currentTime >= this.state.duration) {
        sound.stop();
        sound.playing = false;
        this.setState({
          currentTime: 0,
          playing: false,
        });
      } else {
        const currentTime = new Date();
        const currentDifference = Math.round(
          (currentTime.getTime() - this.state.startPlayTime.getTime()) / 1000,
        );
        if (currentDifference !== this.state.currentTime) {
          if (this.state.playing) {
            this.setState({ currentTime: currentDifference },
              () => this.calculateCurrentTime());
          }
        } else {
          setTimeout(this.calculateCurrentTime, 1000);
        }
      }
    }

    setPauseOnSound = () => {
      const { audioData: { sound } } = this.props;
      if (!sound.paused) {
        sound.pause();
        this.setState({
          playing: false,
          onToggle: false,
        });
      }
    }

    setPlayOnSound = () => {
      const { audioData: { sound } } = this.props;
      if (!this.state.onToggle) {
        sound.play();
        this.setState({
          playing: true,
          onToggle: true,
        });
      }
    }

    changeCurrentTimeOfSong = (time) => {
      const { audioData: { sound } } = this.props;
      if (sound) {
        sound.offsetTime = time;
      }
    }

    setCurrentTime = (currentTime) => {
      this.setState({
        currentTime,
      }, () => this.changeCurrentTimeOfSong(currentTime));
    }

    render() {
      const { currentTime, duration } = this.state;
      const { audioData: { sound, voice } } = this.props;
      const minSliderVolume = 0;
      const stepSliderVolume = 0.001;
      let formatedDurationTime = '00:00';
      let formatedCurrentTime = '00:00';
      formatedDurationTime = this.formatingSongTime(duration) || formatedDurationTime;
      formatedCurrentTime = this.formatingSongTime(currentTime) || formatedCurrentTime;
      return (
        <div className="DurationContainer">
          <div className="DurationContainerFlexChild">
            <div className="Timer">
              {formatedCurrentTime}
              {' '}
/
              {formatedDurationTime}
            </div>
            <Slider
              className="DurationContainer--slider"
              value={currentTime}
              tooltip={false}
              min={minSliderVolume}
              max={duration}
              step={stepSliderVolume}
              onChangeStart={sound && this.setPauseOnSound}
              onChange={sound && this.setCurrentTime}
              onChangeComplete={sound && this.setPlayOnSound}
            />
          </div>
          {sound && (voice.playing && sound.playing) ? (
            <SwitcherSound />) : (<VolumeComponent />)}
        </div>
      );
    }
}

TrackDuration.propTypes = {
  audioData: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  audioData: state.audioData,
});

export default connect(mapStateToProps)(TrackDuration);