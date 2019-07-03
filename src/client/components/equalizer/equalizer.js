import React, { Component } from 'react';
import Hark from 'hark';
import Pizzicato from 'pizzicato';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Graphicequaliser from './canvasEqualizer';
import PlayButton from './playButton';
import Uploadbutton from './upload';
import Infoabouttrack from './upload/infoAboutFile';
import Streambutton from './streamButton';
import StreamDetect from './streamDetect';
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
    heightArray: null,
    streamDetect: 'no speaking',
  }

  async componentDidMount() {    
    const { audioData } = this.props;
    const { analyser, audioContext } = audioData;
    const howManyFrequancyCut = 300;
    const numPoints = analyser.frequencyBinCount - howManyFrequancyCut;
    const uint8Array = new Uint8Array(numPoints);
    await this.setState({      
      numPoints,
      heightArray: uint8Array,
      analyser,
      audioContext,
    });
    await this.detectStreamSoundFromMicrophone();
    await this.renderEqualizer();
  }

  createSoundStream = (stream) => {
    const { audioContext } = this.state;
    const audioStream = new Audio();

    audioStream.srcObject = stream;
    audioStream.muted = true;
    // hark - JS module that listens to an audio stream,
    // and emits events indicating whether the user is speaking or not
    const options = {};
    const speechEvents = Hark(stream, options);
    speechEvents.on('speaking', () => {
      this.setState({
        streamDetect: 'speaking',
      });
    });
    speechEvents.on('stopped_speaking', () => {
      this.setState({
        streamDetect: 'no speaking',
      });
    });
    const streamSource = audioContext.createMediaStreamSource(stream);
    const { createStreamData: createStreamDataAsProp } = this.props;
    createStreamDataAsProp({
      audioStream,
      streamSource,
    });
  }

  detectStreamSoundFromMicrophone = () => {
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        audio: true,
      })
        .then(stream => this.createSoundStream(stream))
        .catch((e) => {
          throw new Error(e);
        });
    } else {
      throw new Error('browser doesnt support audio API');
    }
  }

  playSoundFromFile = () => {
    const { audioData } = this.props;
    const { audioFromFile: soundFromFile, playPauseState } = audioData;
    if (!playPauseState) {
      soundFromFile.play();
      this.equaliserRun();
    } else {
      soundFromFile.pause();
    }
    const { playPauseSoundFromFile: playPauseSoundFromFileAsProp } = this.props;
    playPauseSoundFromFileAsProp();
  }

  startMuteStream = () => {
    const { audioData } = this.props;
    const {
      audioStream,
      audioContext,
      analyser,
      streamSource,
      startMuteState,
    } = audioData;

    if (!startMuteState) {
      streamSource.connect(analyser);
      analyser.connect(audioContext.destination);
      // play/pause function doesn't work
      audioStream.play();
      this.equaliserRun();
    } else {
      streamSource.disconnect(analyser);
      audioStream.pause();
    }
    const { startMuteStreamAudio: startMuteStreamAudioAsProp } = this.props;
    startMuteStreamAudioAsProp();
  }

  equaliserRun = () => {
    requestAnimationFrame(this.renderEqualizer);
  }

  renderEqualizer = () => {
    const {
      analyser, heightArray, ctx, numPoints,
    } = this.state;
    const { audioData } = this.props;
    const { playPauseState, startMuteState } = audioData;
    let isFirstColorForEqualizerUsed = true;
    analyser.getByteFrequencyData(heightArray);
    const { width, height } = ctx.canvas;
    const numbersOfRectengle = 52;
    const totalAreaOfRectangles = 5 / 6;
    const rectangleCornerRadius = 2;
    const rectangleMaxWidth = 512;
    const countColumns = Math.floor(width / numbersOfRectengle);
    const columnWidth = Math.floor(totalAreaOfRectangles * width / numbersOfRectengle);
    ctx.clearRect(0, 0, width, height);
    for (let x = 0; x < width; x += countColumns) {
      const ndx = Math.floor(x * numPoints / width);
      const vol = heightArray[ndx];
      const y = vol * height / rectangleMaxWidth;
      this.roundedRect(ctx, x, height / 2, columnWidth, y,
        rectangleCornerRadius,
        isFirstColorForEqualizerUsed);
      isFirstColorForEqualizerUsed = !isFirstColorForEqualizerUsed;
    }
    // if (playPauseState === true || startMuteState === true) {
      requestAnimationFrame(this.renderEqualizer);
    // }
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
  };
    );       
        
      
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
    const { streamDetect } = this.state;
    const { audioData } = this.props;
    const {
      widthCanvas,
      heightCanvas,
      trackName,
      trackSize,
      trackType,
    } = audioData;
    return (
      <div className="graphic_equalizer">
        <Graphicequaliser
          width={widthCanvas}
          height={heightCanvas}
          getCanvasEl={setCanvasToState}
        />
        <div className="ButtonsContainer">
          <Streambutton onclickhandler={startMuteStream} />
          <StreamDetect streamDetect={streamDetect} />
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


