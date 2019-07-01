import React from 'react';
import PropTypes from 'prop-types';
import './modalSavePressetesWindow.css';
import { cancelWindowIcon } from '../../../../assets/icons/icons';
import SavePressetsToBDAndCancelButton from './savePressetsToBDAndCancelButton';

const SavePressetesModalWindow = (props) => {
  const { saveButtonClick, showHideModalBlock } = props;  
  return (
    <div
      role="button"
      className="modalSavePressetesWindow"
      id="modalSavePressetesWindow"
      tabIndex="0"
      onKeyDown={showHideModalBlock}
      ref={props.refFocus}
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
          onClickHandler={saveButtonClick}
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
};

SavePressetesModalWindow.propTypes = {
  saveButtonClick: PropTypes.func.isRequired,
  showHideModalBlock: PropTypes.func.isRequired,
};

export default SavePressetesModalWindow;
