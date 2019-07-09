import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pizzicato from 'pizzicato';
import Dropzone from 'react-dropzone';
import { createAudioData, playPauseSoundFromFile } from '../../actions/audioActions';

import './drag-and-drop.css';


class DragAndDrop extends Component {
    onDrop = (acceptedFiles) => {
      const file = acceptedFiles[0];
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

  render() {
    const maxSize = 1000000000;
    return (
      <div className="container text-center mt-5">
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
              {isDragActive && !isDragReject && "Drop it like it's hot!"}
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
});

export default connect(mapStateToProps, {
  createAudioDataAsProp: createAudioData,
  playPauseSoundFromFileAsProp: playPauseSoundFromFile,
})(DragAndDrop);
