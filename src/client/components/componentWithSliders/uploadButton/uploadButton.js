import React from 'react';
import './uploadButton.css';
import { uploadIcon } from '../../../assets/icons/icons';

const UploadButton = () => (
  <div className="UploadButton--wrapper">
    <button className="UploadButton">{uploadIcon} Upload Song</button>
    <input className="UploadInput" type="file" name="myfile" />
  </div>
);

export default UploadButton;
