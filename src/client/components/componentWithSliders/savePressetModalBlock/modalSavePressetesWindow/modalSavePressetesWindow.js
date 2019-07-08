import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../button';
import './modalSavePressetesWindow.css';
import { cancelIcon, saveIcon } from '../../../../assets/icons/icons';


const SavePressetesModalWindow = ({ showHideModalBlock, refFocus }) => (
  <div
    role="button"
    className="modalSavePressetesWindow"
    id="modalSavePressetesWindow"
    tabIndex="0"
    onKeyDown={showHideModalBlock}
    ref={refFocus}
  >
    <div className="headerModalWindow">
      {cancelIcon}
    </div>
    <div className="textArea">
      <strong>Please type presset&#39;s name</strong>
      <input type="text" />
    </div>
    <div className="SaveCancelButtonsContainer">
      <Button
        className="ButtonStyleTemplate"
        icon={saveIcon}
        value="Save"
      />
      <Button
        className="ButtonStyleTemplate"
        onClick={showHideModalBlock}
        icon={cancelIcon}
        value="Cancel"
      />
    </div>
  </div>
);


SavePressetesModalWindow.propTypes = {
  showHideModalBlock: PropTypes.func.isRequired,
  refFocus: PropTypes.func.isRequired,
};

export default SavePressetesModalWindow;
