import React from 'react';
import './uploadSongButton.css';
import { uploadIcon } from '../../assets/icons/icons';

const UploadSongButton = () => (
  <div className="UploadSongButton--wrapper">
    <button type="button" className="UploadSongButton">
      {uploadIcon}
      {' '}
      Upload Song
    </button>
    <input
      className="uplodSoundInput"
      type="file"
      name="myfile"
    />
  </div>
);

export default UploadSongButton;
