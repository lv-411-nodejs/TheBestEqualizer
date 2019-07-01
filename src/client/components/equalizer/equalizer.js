import React, { Component } from 'react';
import Hark from 'hark';
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
  mergeCanvasWidth,
} from '../../actions/audioActions';

class Equalizer extends Component {
  state = {
    analyser: null,
    ctx: null,
    numPoints: null,
    heightArray: null,
    streamDetect: 'no speaking',
  }

  componentDidMount() {
    this.detectStreamSoundFromMicrophone();
    const canvasEl = document.querySelector('canvas').getContext('2d');
    const { audioData } = this.props;
    const { analyser, audioContext } = audioData;
    const howManyFrequancyCut = 100;
    const numPoints = analyser.frequencyBinCount - howManyFrequancyCut;
    const uint8Array = new Uint8Array(numPoints);
    this.setState({
      ctx: canvasEl,
      numPoints,
      heightArray: uint8Array,
      analyser,
      audioContext,
    });
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

  widthMerge = (eventFromInputTypeRange) => {
    const { mergeCanvasWidth: mergeCanvasWidthAsProp } = this.props;
    mergeCanvasWidthAsProp(eventFromInputTypeRange);
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
    requestAnimationFrame(this.renderEqualizer);
  }

  roundedRect = (ctx, x, y, width, height, radius, flagColor) => {
    ctx.beginPath();
    ctx.moveTo(x, y - height);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.lineTo(x + width, y - height + radius);
    ctx.arcTo(x + width, y - height, x + width - radius, y - height, radius);
    ctx.lineTo(x + radius, y - height);
    ctx.arcTo(x, y - height, x, y - height + radius, radius);
    ctx.fillStyle = flagColor ? '#05D8C5' : '#FFFFFF';
    ctx.fill();
  }

  uploadSoundInfoFromFile = (e) => {
    const [file] = e.target.files;
    const { audioData } = this.props;
    const { audioContext: context, analyser } = audioData;
    const audio = new Audio(URL.createObjectURL(file));
    audio.loop = true;
    audio.crossOrigin = 'anonymous';
    audio.addEventListener('canplay', () => {
      try {
        const audioFromFileSource = context.createMediaElementSource(audio);
        const { createAudioData: createAudioDataAsProp } = this.props;
        createAudioDataAsProp({
          audioFromFile: audio,
          audioFile: file,
          audioFromFileSource,
          trackName: file.name,
          trackType: file.type,
          trackSize: file.size,
        });
        audioFromFileSource.connect(analyser);
        analyser.connect(context.destination);
      } catch (err) {
        throw new Error(err);
      }
    });
    audio.addEventListener('error', (err) => {
      throw new Error(err);
    });
  }

  render() {
    const {
      startMuteStream,
      playSoundFromFile,
      widthMerge,
      uploadSoundInfoFromFile,
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
          onChangeWidth={widthMerge}
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
  mergeCanvasWidth: PropTypes.func.isRequired,
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
  mergeCanvasWidth,
})(Equalizer);
