import React, { Component } from 'react';
import Pizzicato from 'pizzicato';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Graphicequaliser from './canvasEqualizer';
import PlayButton from './playButton';
import Uploadbutton from './upload';
import Infoabouttrack from './upload/infoAboutFile';
import Streambutton from './streamButton';
import './equalizer.css';
import {
  createAudioData,
  playPauseSoundFromFile,
  createStreamData,
  startMuteStreamAudio,
} from '../../actions/audioActions';

class Equalizer extends Component {
  state = {
    analyser: null,
    ctx: null,
    numPoints: null,
    uint8Array: null,    
  }

  componentDidMount() { 
    this.detectStreamSoundFromMicrophone();
    // this.renderEqualizer();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { audioData } = nextProps;
    const { analyser, audioContext } = audioData;
    const howManyFrequancyCut = 300;
    const numPoints = analyser.frequencyBinCount - howManyFrequancyCut;
    const uint8Array = new Uint8Array(numPoints);
    return {      
      numPoints,
      uint8Array,
      analyser,
      audioContext,
    }
    };  

  createSoundStream = () => {   
    const voice = new Pizzicato.Sound({
      source: 'input',
    })        
    const { createStreamData: createStreamDataAsProp } = this.props;
    createStreamDataAsProp({
      voice,
    });
  }

  detectStreamSoundFromMicrophone = () => {
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        audio: true,
      })
        .then(           
          this.createSoundStream()
        )
        .catch((errorStream) => {
          throw new Error(errorStream);
        });
    } else {
      throw new Error('browser doesnt support audio API');
    }
  }

  uploadSoundInfoFromFile = (e) => {
    const [file] = e.target.files;    
    const audioFile = new Audio(URL.createObjectURL(file));
    const sound = new Pizzicato.Sound({
      source: 'file',
      options: {
        path: audioFile.src,
        loop: true,
      }
    }, () => {
      const { audioData } = this.props;
      const { analyser } = audioData;  
      sound.connect(analyser);
      const { createAudioData: createAudioDataAsProp } = this.props;
        createAudioDataAsProp({
          sound,
          trackName: file.name,
          trackType: file.type,
          trackSize: file.size,
        });        
  }
    );     
  }

   playSoundFromFile = async () => {    
    const { audioData } = this.props;
    const { 
      sound,
      playPauseState } = audioData;
    const {
      playPauseSoundFromFile: playPauseSoundFromFileAsProp
     } = this.props;          
    if (!playPauseState) {
      sound.play();      
    } else {
      sound.pause();
    }   
    await playPauseSoundFromFileAsProp(); 
    await this.renderEqualizer();
  }

  startMuteStream = async () => {
    const { audioData } = this.props;
    const {
      analyser,
      voice,
      startMuteState,
    } = audioData;
    if (!startMuteState) {
      voice.connect(analyser); 
      voice.play();      
    } else {
      voice.pause();
    }
    const { startMuteStreamAudio: startMuteStreamAudioAsProp } = this.props;
    await startMuteStreamAudioAsProp();
    await this.renderEqualizer();
  }

  renderEqualizer = () => {
    const {
      analyser, uint8Array, ctx, numPoints,
    } = this.state;
    const { audioData } = this.props;
    const { playPauseState, startMuteState } = audioData;    
    let isFirstColorForEqualizerUsed = true;
    analyser.getByteFrequencyData(uint8Array);
    const { width, height } = ctx.canvas;
    const numbersOfRectengle = 52;
    const totalAreaOfRectangles = 5 / 6;
    const rectangleCornerRadius = 2;
    const rectangleMaxHeight = 512;
    const countColumns = Math.floor(width / numbersOfRectengle);
    const columnWidth = Math.floor(totalAreaOfRectangles * width / numbersOfRectengle);
    console.log(width, columnWidth,  countColumns )
    ctx.clearRect(0, 0, width, height);
    for (let x = 0; x < width; x += countColumns) {
      const ndx = Math.floor(x * numPoints / width);
      const vol = uint8Array[ndx];
      const y = vol * height / rectangleMaxHeight;
      this.roundedRect(ctx, x, height / 2, columnWidth, y,
        rectangleCornerRadius,
        isFirstColorForEqualizerUsed);
      isFirstColorForEqualizerUsed = !isFirstColorForEqualizerUsed;
    }
    if (playPauseState === true || startMuteState === true) {
      console.log('aqua')
      requestAnimationFrame(this.renderEqualizer);
    }
  }

  roundedRect = (ctx, x, y, width, height, radius, flagColor) => {
    const heightReq = height < radius ? radius : height;
    ctx.beginPath();
    ctx.moveTo(x, y - heightReq);
    ctx.lineTo(x, y + heightReq - radius);
    ctx.arcTo(x, y + heightReq, x + radius, y + heightReq, radius);
    ctx.lineTo(x + width - radius, y + heightReq);
    ctx.arcTo(x + width, y + heightReq, x + width, y + heightReq - radius, radius);
    ctx.lineTo(x + width, y - heightReq + radius);
    ctx.arcTo(x + width, y - heightReq, x + width - radius, y - heightReq, radius);
    ctx.lineTo(x + radius, y - heightReq);
    ctx.arcTo(x, y - heightReq, x, y - heightReq + radius, radius);
    ctx.fillStyle = flagColor ? '#05D8C5' : '#FFFFFF';
    ctx.fill();
  } 

  setCanvasToState = (canvasEl) => {
    this.setState({
      ctx: canvasEl.getContext('2d'),
    })
  }

  render() {    
    const {
      startMuteStream,
      playSoundFromFile,
      uploadSoundInfoFromFile,
      setCanvasToState,
    } = this;    
    const { audioData } = this.props;
    const {
      widthCanvas,
      heightCanvas,
      trackName,
      trackSize,
      trackType,
    } = audioData;
    return (
      <div className="graphicEqualizer">
        <Graphicequaliser
          width={widthCanvas}
          height={heightCanvas}
          getCanvasEl={setCanvasToState}
        />
        <div className="buttonsContainer">
          <Streambutton onclickhandler={startMuteStream} />          
          <Uploadbutton handleInfoFromSound={uploadSoundInfoFromFile} />
          <PlayButton hadlesound={playSoundFromFile} />
        </div>
        <Infoabouttrack
          trackname={trackName}
          tracksize={trackSize}
          tracktype={trackType}
        />
      </div>
    );
  }
}

Equalizer.propTypes = {
  createAudioData: PropTypes.func.isRequired,
  playPauseSoundFromFile: PropTypes.func.isRequired,
  createStreamData: PropTypes.func.isRequired,
  startMuteStreamAudio: PropTypes.func.isRequired,  
  audioData: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  audioData: state.audioData,
});

export default connect(mapStateToProps, {
  createAudioData,
  playPauseSoundFromFile,
  createStreamData,
  startMuteStreamAudio,
})(Equalizer);


