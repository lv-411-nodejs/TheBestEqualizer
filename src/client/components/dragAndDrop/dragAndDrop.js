import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import Pizzicato from 'pizzicato';
import { createAudioData, playPauseSoundFromFile } from '../../store/actions/audioActions';

import './dragAndDrop.css';


class DragAndDrop extends Component {
  onDrop = (acceptedFiles) => {
  //   const [file] = acceptedFiles;
  //   const audioFile = new Audio(URL.createObjectURL(file));
  //   const sound = new Pizzicato.Sound({
  //     source: 'file',
  //     options: {
  //       path: audioFile.src,
  //       loop: true,
  //     },
  //   }, () => {
  //     this.props.audioData.sound = null;
  //     this.props.attachFilters(sound);
  //     this.createSoundInfoInState(sound, file);
  //   });
    const [file] = acceptedFiles;
    const audioFile = new Audio(URL.createObjectURL(file));
    const sound = new Pizzicato.Sound({
      source: 'file',
      options: {
        path: audioFile.src,
        loop: true,
      },
    }, () => {
      this.props.audioData.sound && this.removefilters(this.props.audioData.sound);
      this.props.attachFiltersToSource(sound);
      this.createSoundInfoInState(sound, file);
    });
  };

  createSoundInfoInState = (sound, file) => {
    const { audioData: { analyser }, createAudioDataAsProp } = this.props;
    sound.connect(analyser);
    createAudioDataAsProp({
      sound,
      trackName: file.name,
    });
  };

  render() {
    const maxSize = 1000000000;
    return (
      <div className="container">
        <Dropzone
          onDrop={this.onDrop}
          accept="audio/mp3"
          minSize={0}
          maxSize={maxSize}
        >
          {({
            getRootProps, getInputProps, isDragActive, isDragReject,
          }) => (
            <div {...getRootProps()} className="containerForInput">
              <input {...getInputProps()} />
              {!isDragActive && 'Click here or drop a file to upload!'}
              {isDragActive && !isDragReject && 'Drop it like it\'s hot!'}
              {isDragReject && 'File type not accepted, sorry!'}
            </div>
          )
        }
        </Dropzone>
      </div>
    );
  }
}


DragAndDrop.propTypes = {
  createAudioDataAsProp: PropTypes.func.isRequired,
  audioData: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  audioData: state.audioData,
  blocksData: state.blocksData,
});

export default connect(mapStateToProps, {
  createAudioDataAsProp: createAudioData,
  playPauseSoundFromFileAsProp: playPauseSoundFromFile,
})(DragAndDrop);
