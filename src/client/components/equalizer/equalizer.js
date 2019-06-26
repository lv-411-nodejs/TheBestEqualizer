import React, {Component} from 'react';
import Hark from 'hark';
import PropTypes from 'prop-types';
import Graphicequaliser from './canvasequalizer/canvasequalizer';
import PlayButton from './playbutton/playbutton';
import Uploadbutton from './upload/uploadbutton';
import Infoabouttrack from './upload/infoaboutfile/infoaboutuploadfile';
import Streambutton from './streambutton/streambutton';
import {connect} from 'react-redux';
import {createAudioData, playPauseSoundFromFile, createStreamData, startMuteStreamAudio, mergeCanvasWidth} from '../../actions/audioactions';

class Equalizer extends Component {
  state = {
    analyser: this.props.audioData.analyser,
    ctx: undefined,
    numPoints: undefined,
    heightArray: undefined
  }

  componentDidMount() {
    let canvasEl = document.querySelector("canvas").getContext("2d");
    let numPoints = this.state.analyser.frequencyBinCount - 80;
    let uint8Array = new Uint8Array(numPoints);
    this.setState({
      ctx: canvasEl,
      numPoints: numPoints,
      heightArray: uint8Array
    });
    this.detectStreamSoundFromMicrophon();
  }

  createSoundStream = (stream) => {
    let {audioContext: context} = this.props.audioData;
    let audioLineIn = new Audio();

    audioLineIn.srcObject = stream;
    audioLineIn.muted = true;
    //hark - JS module that listens to an audio stream, and emits events indicating whether the user is speaking or not 
    let options = {};
    let speechEvents = Hark(stream, options);
    let htmlinfo = document.getElementById("stream_detecting");
    speechEvents.on('speaking', () => {
      htmlinfo.innerHTML = `speaking`;
    });

    speechEvents.on('stopped_speaking', () => {
      htmlinfo.innerHTML = `no stream detekting`;
    });
    let sourceStream = context.createMediaStreamSource(stream);
    this.props.createStreamData({
      audioLineIn: audioLineIn,
      sourceStream
    });
  }

  detectStreamSoundFromMicrophon = () => {
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
          audio: true
        })
        .then(stream => this.createSoundStream(stream))
        .catch((e) => {
          throw new Error(e);
        });
    } else {
      throw new Error('browser doesnt support audio API');
    }
  }

  widthMerge = (e) => {
    this.props.mergeCanvasWidth(e);
  }

  playSoundFromFile = () => {
    let {audioFromFile: soundFromFile, playPauseState} = this.props.audioData;
    if (!playPauseState) {
      soundFromFile.play();
      this.equaliserRun();
    } else {
      soundFromFile.pause();
    }
    this.props.playPauseSoundFromFile();
  }

  startMuteStream = () => {
    let {
      audioStream,
      audioContext,
      analyser,
      streamSource,
      startMuteState
    } = this.props.audioData;

    if (!startMuteState) {
      streamSource.connect(analyser);
      analyser.connect(audioContext.destination);
      //play/pause function doesn't work 
      audioStream.play();
      this.equaliserRun();
      this.props.startMuteStreamAudio();
    } else {
      streamSource.disconnect(analyser);
      audioStream.pause();
      this.props.startMuteStreamAudio();
    }
  }

  equaliserRun = () => {
    requestAnimationFrame(this.renderEqualizer);
  }

  renderEqualizer = () => {
    let {analyser, heightArray, ctx, numPoints} = this.state;
    let flagColor = true;
    analyser.getByteFrequencyData(heightArray);
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    let countcolumns = Math.floor(ctx.canvas.width / 52);
    let columnwidth = Math.floor(5 / 6 * ctx.canvas.width / 52);
    ctx.clearRect(0, 0, width, height);
    for (let x = 0; x < width; x += countcolumns) {
      let ndx = x * numPoints / width | 0;
      let vol = heightArray[ndx];
      let y = vol * height / 512;
      this.roundedRect(ctx, x, height / 2, columnwidth, y, 2, flagColor);
      flagColor = !flagColor;
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
    ctx.fillStyle = flagColor ? '#1ecea8' : '#93969f';
    ctx.fill();
  }
  
  uploadSoundInfoFromFile = (e) => {
    let [file] = e.target.files;
    let {audioContext: context, analyser} = this.props.audioData;
    let audio = new Audio(URL.createObjectURL(file));
    audio.loop = true;
    audio.crossOrigin = "anonymous";
    audio.addEventListener('canplay', () => {
      try {
        let source = context.createMediaElementSource(audio);
        this.props.createAudioData({
          audio,
          file,
          source,
          name: file.name,
          size: file.size,
          type: file.type
        });
        source.connect(analyser);
        analyser.connect(context.destination);
      } catch (e) {
        throw new Error(e);
      }
    });
    audio.addEventListener('error', (e) => {
      throw new Error(e);
    });
  }

  render = () => ( 
    <div className = "graphic_equalizer" >
    <Streambutton onclickhandler = {this.startMuteStream}/>
    <span id="stream_detecting"></span >
    <PlayButton hadlesound = {this.playSoundFromFile}/> 
    <Graphicequaliser width = {this.props.audioData.widthCanvas} height = {this.props.audioData.heightCanvas}
                      onChangeWidth = {this.widthMerge}/> 
    <Uploadbutton handleInfoFromSound = {this.uploadSoundInfoFromFile}/> 
    <Infoabouttrack trackname = {this.props.audioData.trackName} tracksize = {this.props.audioData.trackSize}
                    tracktype = {this.props.audioData.trackType}/> 
    </div >
  )
}

Equalizer.propTypes = {
  createAudioData: PropTypes.func.isRequired,
  playPauseSoundFromFile: PropTypes.func.isRequired,
  createStreamData: PropTypes.func.isRequired,
  startMuteStreamAudio: PropTypes.func.isRequired,
  mergeCanvasWidth: PropTypes.func.isRequired,
  audioData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  audioData: state.audioData
});

export default connect(mapStateToProps, {createAudioData, playPauseSoundFromFile, createStreamData, startMuteStreamAudio, mergeCanvasWidth})(Equalizer);