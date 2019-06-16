import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import './uploadButton.css';

const uploadIcon = <FontAwesomeIcon icon={faUpload}/>;

const UploadButton = () => (
  <div className="UploadButton--wrapper">
    <button className="UploadButton">{uploadIcon} Upload Song</button>
    <input className="UploadInput" type="file" name="myfile" />
  </div>
);

export default UploadButton;
