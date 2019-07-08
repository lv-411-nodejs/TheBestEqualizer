import React, {Component, Fragment} from 'react';
import './switcherSound.css';
import Pizzicato from 'pizzicato';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';
import MartinGarrixMusic from './audio/baker_baker.mp3';

class SwitcherSound extends Component {

  state = {
    volumeValueTrack: 0.5,
    volumeValueVoice: 0.5,
    track: null,
    voice: null,
  };

  // componentDidMount = () => {
  //   const {volumeValueTrack, volumeValueVoice} = this.state;
  //   const track = new Pizzicato.Sound(MartinGarrixMusic, function() {
  //     track.volume = volumeValueTrack;
  //   });
  //   const voice = new Pizzicato.Sound({ source: 'input'}, function () {
  //     voice.volume = volumeValueVoice;
  //   })
  //   this.setState({track: track, voice: voice})
  // }

  static getDerivedStateFromProps(props, state){
    console.log("hello", props)  
    const {audioData, audioStream} = props;
    const {volumeValueTrack, volumeValueVoice} = state;
    if (audioData.audioFile && audioData.audioStream) {
      const analyser = Pizzicato.context.createAnalyser();
        const curr_track = new Pizzicato.Sound(audioData.audioFromFile.src, function() {
            curr_track.volume = volumeValueTrack;
        }); 
        curr_track.connect(analyser);
        //const curr_voice = new Pizzicato.Sound(audioData)
        console.log(curr_track)
        return {track: curr_track, context: analyser}     
    }
    return null;
  }

  changeTracksVolume = () => {
    const {volumeValueTrack, volumeValueVoice, track, voice} = this.state;
    console.log(volumeValueTrack, volumeValueVoice)
    track.volume = 1 - volumeValueTrack;
    voice.volume = 1 - volumeValueVoice;
    console.log(track.volume, voice.volume)
  }

  changeVolume = (volumeValueTrack) => {
    this.setState({
      volumeValueTrack: parseFloat(volumeValueTrack.toFixed(2)),
      volumeValueVoice: parseFloat(1 - volumeValueTrack.toFixed(2)),
    }, () => this.changeTracksVolume())
  }

  playMusic = (props) => {
    const {track, voice, context} = this.state;
    const {audioData} = props;
    console.log(track, context)
    console.log(audioData)
    track.play();
    voice.play();
  }

  getCurrentTime = () => {
    console.log(this.state.track.sourceNode.buffer)
  }

render(){
  const { volumeValueTrack, track } = this.state;
  console.log(this.state.track)
  const minSliderVolume = 0;
  const maxSliderVolume = 1;
  const stepSliderVolume = 0.001;
  return (
    <div className="SwitcherContainer">
      <button onClick={this.getCurrentTime}>Time</button>
      <button onClick={this.playMusic}>Play</button>
      {track && <Fragment>
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
      </Fragment>}
    </div>
  );
}
}

const mapStateToProps = state => ({
    audioData: state.audioData,
});

export default connect(mapStateToProps)(SwitcherSound);
