import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pizzicato from 'pizzicato';
import Dropzone from 'react-dropzone';
import { createAudioData } from '../../actions/audioActions';


class DragAndDrop extends Component {
    onDrop = (acceptedFiles) => {
      console.log(acceptedFiles);
    };

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

  render() {
    return (
      <div className="container text-center mt-5">
        <Dropzone onDrop={this.onDrop} accept="audio/">
          {({
            getRootProps, getInputProps, isDragActive, isDragReject,
          }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} onChange={this.uploadSoundInfoFromFile} />
                {!isDragActive && 'Click here or drop a file to upload!'}
                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                {isDragReject && 'File type not accepted, sorry!'}
              </div>
            </section>
          )}
        </Dropzone>
        {/* <div {...getRootProps()}>
            <input {...getInputProps()}/>
            {!isDragActive && 'Click here or drop a file to upload!'}
            {isDragActive && !isDragReject && "Drop it like it's hot!"}
            {isDragReject && 'File type not accepted, sorry!'}
            {isFileTooLarge && (
              <div className="text-danger mt-2">File is too large.</div>
            )}
          </div>
          <ul className="list-group mt-2">
            {acceptedFiles.length > 0
              && acceptedFiles.map((acceptedFile, id) => (
                <li
                  key={id}
                  className="list-group-item list-group-item-success"
                  onChange={handleInfoFromSound}
                >
                  {acceptedFile.name}
                </li>
              ))}
          </ul> */}
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
})(DragAndDrop);
