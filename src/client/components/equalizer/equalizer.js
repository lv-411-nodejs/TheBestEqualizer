import React, { Component } from 'react';
import Pizzicato from 'pizzicato';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Graphicequaliser from './canvasEqualizer';
import PlayButton from './playButton';
import Uploadbutton from './upload';
import Infoabouttrack from './upload/infoAboutFile';
import Streambutton from './streamButton';
import DragAndDrop from '../dragAndDrop';
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
  }

  static getDerivedStateFromProps({ audioData: { analyser, audioContext } }) {
    const howManyFrequancyCut = 20;
    const numPoints = analyser.frequencyBinCount - howManyFrequancyCut;
    const uint8Array = new Uint8Array(numPoints);
    return {
      numPoints,
      uint8Array,
      analyser,
      audioContext,
    };
  }

  createSoundStream = () => {
    const voice = new Pizzicato.Sound({
      source: 'input',
    });
    const { createStreamDataAsProp } = this.props;
    createStreamDataAsProp({
      voice,
    });
  }

  uploadSoundInfoFromFile = (eventFromInputFile) => {
    const [file] = eventFromInputFile.target.files;
    const audioFile = new Audio(URL.createObjectURL(file));
    const sound = new Pizzicato.Sound({
      source: 'file',
      options: {
        path: audioFile.src,
        loop: true,
      },
    }, () => this.createSoundInfoInState(sound, file));
  };

  createSoundInfoInState = (sound, file) => {
    const { audioData: { analyser }, createAudioDataAsProp } = this.props;
    sound.connect(analyser);
    createAudioDataAsProp({
      sound,
      trackName: file.name,
      trackType: file.type,
      trackSize: file.size,
    });
  };

  detectStreamSoundFromMicrophone = () => {
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        audio: true,
      })
        .then(
          this.createSoundStream(),
        )
        .catch((errorStream) => {
          throw new Error(errorStream);
        });
    } else {
      throw new Error('browser doesnt support audio API');
    }
  }

   playSoundFromFile = async () => {
     const {
       audioData: {
         sound,
         playPauseState,
       }, playPauseSoundFromFileAsProp,
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
    const {
      audioData: {
        analyser,
        voice,
        startMuteState,
      },
      startMuteStreamAudioAsProp,
    } = this.props;
    if (!startMuteState) {
      voice.connect(analyser);
      voice.play();
    } else {
      voice.pause();
    }
    await startMuteStreamAudioAsProp();
    await this.renderEqualizer();
  }

  renderEqualizer = () => {
    const {
      analyser, uint8Array, ctx, numPoints,
    } = this.state;
    const { audioData: { playPauseState, startMuteState } } = this.props;
    let isFirstColorForEqualizerUsed = true;
    analyser.getByteFrequencyData(uint8Array);
    const { width, height } = ctx.canvas;
    const numbersOfRectengle = 52;
    const totalAreaOfRectangles = 5 / 6 * width;
    const rectangleCornerRadius = 2;
    const rectangleMaxHeight = 512;
    const widthColumnWithPadding = width / numbersOfRectengle;
    const columnWidth = totalAreaOfRectangles / numbersOfRectengle;
    const paddingColumn = (widthColumnWithPadding - columnWidth) / 2;
    ctx.clearRect(0, 0, width, height);
    for (let x = 0; x < width - widthColumnWithPadding; x += columnWidth + 2 * paddingColumn) {
      const everageValueOfFreq = Math.floor(x * numPoints / width);
      const valueOfFrequance = uint8Array[everageValueOfFreq];
      const rectHeight = valueOfFrequance * height / rectangleMaxHeight;
      this.roundedRect(ctx, x, height / 2, columnWidth, rectHeight,
        rectangleCornerRadius,
        isFirstColorForEqualizerUsed);
      isFirstColorForEqualizerUsed = !isFirstColorForEqualizerUsed;
    }
    if (playPauseState === true || startMuteState === true) {
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
    });
  }

  render() {
    const {
      startMuteStream,
      playSoundFromFile,
      uploadSoundInfoFromFile,
      setCanvasToState,
    } = this;
    const {
      audioData: {
        widthCanvas,
        heightCanvas,
        trackName,
        trackSize,
        trackType,
      },
    } = this.props;

    // const hideOrShowCanvas = sound || startMuteState ? (
    //   <Graphicequaliser
    //     width={widthCanvas}
    //     height={heightCanvas}
    //     getCanvasEl={setCanvasToState}
    //   />
    // ) : <DragAndDrop />;

    // const hideOrShowCanvas = sound || startMuteState ?  (
    //   <div>
    //     <div style={{ display: 'block' }}>
    //       <Graphicequaliser
    //         width={widthCanvas}
    //         height={heightCanvas}
    //         getCanvasEl={setCanvasToState}
    //       />
    //     </div>
    //     <div style={{ display: 'none' }}>
    //       <DragAndDrop />
    //     </div>
    //   </div>
    // ) : (
    //   <div>
    //     <div style={{ display: 'none' }}>
    //       <Graphicequaliser
    //         width={widthCanvas}
    //         height={heightCanvas}
    //         getCanvasEl={setCanvasToState}
    //       />
    //     </div>
    //     <div style={{ display: 'block' }}>
    //       <DragAndDrop />
    //     </div>
    //   </div>
    // );

    return (
      <div className="graphicEqualizer">
        <Graphicequaliser
          width={widthCanvas}
          height={heightCanvas}
          getCanvasEl={setCanvasToState}
        />
        <DragAndDrop />
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
  createAudioDataAsProp: PropTypes.func.isRequired,
  playPauseSoundFromFileAsProp: PropTypes.func.isRequired,
  createStreamDataAsProp: PropTypes.func.isRequired,
  startMuteStreamAudioAsProp: PropTypes.func.isRequired,
  audioData: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  audioData: state.audioData,
});

export default connect(mapStateToProps, {
  createAudioDataAsProp: createAudioData,
  playPauseSoundFromFileAsProp: playPauseSoundFromFile,
  createStreamDataAsProp: createStreamData,
  startMuteStreamAudioAsProp: startMuteStreamAudio,
})(Equalizer);
