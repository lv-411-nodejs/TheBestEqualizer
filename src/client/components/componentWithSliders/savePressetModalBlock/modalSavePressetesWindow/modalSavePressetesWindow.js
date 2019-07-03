import React from 'react';
import PropTypes from 'prop-types';
import './modalSavePressetesWindow.css';
import { cancelWindowIcon } from '../../../../assets/icons/icons';
import SavePressetsToBDAndCancelButton from './savePressetsToBDAndCancelButton';

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
      {cancelWindowIcon}
    </div>
    <div className="textArea">
      <strong>Please type presset&#39;s name</strong>
      <input type="text" />
      <ins>Errors/success</ins>
    </div>
    <div className="pressetesButtons">
      <SavePressetsToBDAndCancelButton
        className="pressetesButton"
        id="savePressetesButton"
        buttonTitle="Save"
      />
      <SavePressetsToBDAndCancelButton
        className="pressetesButton"
        id="cancelPressetesButton"
        onClickHandler={showHideModalBlock}
        buttonTitle="Close"
      />
    </div>
  </div>
);


SavePressetesModalWindow.propTypes = {
  showHideModalBlock: PropTypes.func.isRequired,
  refFocus: PropTypes.func.isRequired,
};

export default SavePressetesModalWindow;
