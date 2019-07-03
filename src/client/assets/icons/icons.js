import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faVolumeUp,
  faUpload,
  faSave,
  faHeadset,
  faRss,
  faTh,
  faPodcast,
  faUser,
  faStop, faPlay, faPause,
  faTimes,
  faFlag
} from '@fortawesome/free-solid-svg-icons';

export const settingsIcon = <FontAwesomeIcon icon={faCog} className="icon" />;
export const volumeIcon = <FontAwesomeIcon icon={faVolumeUp} className="icon" />;
export const uploadIcon = <FontAwesomeIcon icon={faUpload} className="icon" />;
export const saveIcon = <FontAwesomeIcon icon={faSave} className="icon" />;
export const headsetIcon = <FontAwesomeIcon icon={faHeadset} className="icon" />;
export const rssIcon = <FontAwesomeIcon icon={faRss} className="icon" />;
export const thIcon = <FontAwesomeIcon icon={faTh} className="icon" />;
export const podcastIcon = <FontAwesomeIcon icon={faPodcast} className="icon" />;
export const userIcon = <FontAwesomeIcon icon={faUser} className="icon" />;
export const stopIcon = <FontAwesomeIcon icon={faStop} className="icon" />;
export const playIcon = <FontAwesomeIcon icon={faPlay} className="icon" />;
export const pauseIcon = <FontAwesomeIcon icon={faPause} className="icon" />;
export const cancelWindowIcon = <FontAwesomeIcon icon={faTimes} />;
export const startStreamIcon = <FontAwesomeIcon icon={faFlag} className="icon" />;