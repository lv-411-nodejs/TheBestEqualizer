import React, { Component } from 'react';

import Pizzicato from 'pizzicato';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GraphicEqualiser from './canvasEqualizer';
import DragAndDrop from '../dragAndDrop';
import Button from '../button';
import UploadButton from './upload';
import InfoAboutTrack from './upload/infoAboutFile';
import Spinner from '../../assets/images/playSpinner.gif';
import {
  startStreamIcon, playIcon, stopIcon, pauseIcon,
} from '../../assets/icons/icons';
import './equalizer.css';
import {
  startCreationAudioData,
  createAudioData,
  playPauseSoundFromFile,
  createStreamData,
  startMuteStreamAudio,
} from '../../store/actions/audioActions';

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
    const { createStreamDataAsProp } = this.props;
    const voice = new Pizzicato.Sound({
      source: 'input',
    }, () => {
      this.removeVoiceFilters();
      this.attachFiltersToSource(voice);
      createStreamDataAsProp({ voice });
    });
  }

  uploadSoundInfoFromFile = (eventFromInputFile) => {
    this.props.startCreationAudioDataAsProp();
    const [file] = eventFromInputFile.target.files;
    const audioFile = new Audio(URL.createObjectURL(file));
    const sound = new Pizzicato.Sound({
      source: 'file',
      options: {
        path: audioFile.src,
        loop: true,
      },
    }, () => {
      this.props.audioData.sound && this.removeSoundFilters();
      this.attachFiltersToSource(sound);
      this.createSoundInfoInState(sound, file);
    });
  };

  createSoundInfoInState = (sound, file) => {
    const { audioData: { analyser } } = this.props;
    sound.connect(analyser);
    this.props.createAudioDataAsProp({
      sound,
      trackName: file.name,
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
  
  pauseSoundFromFile = async () => {
    const {
      audioData: {
        sound,
        playPauseState,
      }, playPauseSoundFromFileAsProp,
    } = this.props;

    if (playPauseState) {
      sound.pause();
    }
    await playPauseSoundFromFileAsProp();
    await this.renderEqualizer();
  }

  stopSoundFromFile = async () => {
    const { ctx } = this.state;
    const { width, height } = ctx.canvas;
    const {
      audioData: {
        sound,
        playPauseState,
        voice,
      }, playPauseSoundFromFileAsProp,
    } = this.props;
    if (playPauseState) {
      await playPauseSoundFromFileAsProp();
      sound.stop();
      voice.stop();
    }
    sound.stop();
    voice.stop();
    ctx.clearRect(0, 0, width, height);
  }

  removeSoundFilters = () => {
    this.props.blocksData.forEach(({ createEffect, isVisible }) =>
      this.props.audioData.sound.removeEffect(createEffect))
    this.props.audioData.sound.disconnect();
    delete this.props.audioData.sound;
  };

  removeVoiceFilters = () => {
    this.props.blocksData.forEach(({ createEffect, isVisible }) =>
      this.props.audioData.voice.removeEffect(createEffect))
    this.props.audioData.voice.disconnect();
    delete this.props.audioData.voice;
  };

  attachFiltersToSource = sourceInput => this.props.blocksData.forEach(({ createEffect, isVisible }) => {
    // console.log(sourceInput);
    isVisible ? sourceInput.addEffect(createEffect) : null;
  });

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
      ctx: canvasEl ? canvasEl.getContext('2d') : null,
    });
  }

  render() {
    const {
      startMuteStream,
      playSoundFromFile,
      uploadSoundInfoFromFile,
      setCanvasToState,
      stopSoundFromFile,
      pauseSoundFromFile,
    } = this;

    const {
      widthCanvas,
      heightCanvas,
      trackName,
      sound,
      startMuteState,
      playPauseState,
    } = this.props.audioData;

    const StartStreamButton = (
      <Button
        className="ButtonStyleTemplate StartStreamButton"
        onClick={startMuteStream}
        icon={startStreamIcon}
        value="Start stream"
      />
    );
    const PlayButton = (
      <Button
        className="ButtonStyleTemplate"
        onClick={playSoundFromFile}
        icon={this.props.audioData.loading ? null : playIcon}
        value={this.props.audioData.loading
          ? <img src={Spinner} alt="Play music spinner" /> : 'Play'}
        disabled={this.props.audioData.loading ? 'disabled' : null}
      />
    );

    const StopButton = (
      <Button
        className="ButtonStyleTemplate"
        onClick={stopSoundFromFile}
        icon={stopIcon}
        value="Stop"
      />
    );
    const PauseButton = (
      <Button
        className="ButtonStyleTemplate"
        onClick={pauseSoundFromFile}
        icon={pauseIcon}
        value="Pause"
      />
    );

    return (
      <div className="graphicEqualizer">
        <div style={{ display: sound || startMuteState ? 'block' : 'none' }}>
          <GraphicEqualiser
            width={widthCanvas}
            height={heightCanvas}
            getCanvasEl={setCanvasToState}
          />
        </div>
        <div style={{ display: sound || startMuteState ? 'none' : 'block' }}>
          <DragAndDrop uploadSoundInfoFromFile={this.uploadSoundInfoFromFile} attachFiltersToSource={this.attachFiltersToSource} />
        </div>
        <div className="ButtonsContainer">
          {StartStreamButton}
          <UploadButton handleInfoFromSound={uploadSoundInfoFromFile} />
          <div style={{ display: playPauseState ? 'none' : 'block' }}>
            {(startMuteState || sound) && PlayButton}
          </div>
          <div style={{ display: playPauseState ? 'block' : 'none' }}>
            {(startMuteState || sound) && PauseButton }
          </div>
          {(startMuteState || sound) && StopButton }
        </div>
        <InfoAboutTrack
          trackname={trackName}
        />
      </div>
    );
  }
}

Equalizer.propTypes = {
  startCreationAudioDataAsProp: PropTypes.func.isRequired,
  createAudioDataAsProp: PropTypes.func.isRequired,
  playPauseSoundFromFileAsProp: PropTypes.func.isRequired,
  createStreamDataAsProp: PropTypes.func.isRequired,
  startMuteStreamAudioAsProp: PropTypes.func.isRequired,
  audioData: PropTypes.instanceOf(Object).isRequired,
  blocksData: PropTypes.instanceOf(Array).isRequired,
  voice: PropTypes.instanceOf(Object),
  sound: PropTypes.instanceOf(Object),
};

const mapStateToProps = state => ({
  audioData: state.audioData,
  blocksData: state.blocksData,
});

export default connect(mapStateToProps, {
  startCreationAudioDataAsProp: startCreationAudioData,
  createAudioDataAsProp: createAudioData,
  playPauseSoundFromFileAsProp: playPauseSoundFromFile,
  createStreamDataAsProp: createStreamData,
  startMuteStreamAudioAsProp: startMuteStreamAudio,
})(Equalizer);
