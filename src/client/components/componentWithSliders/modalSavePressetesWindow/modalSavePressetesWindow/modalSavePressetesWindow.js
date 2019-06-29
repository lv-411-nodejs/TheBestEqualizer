import React from 'react';
import PropTypes from 'prop-types';
import './modalSavePressetesWindow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SavePressetsToBDAndCancelButton from './savePressetsToBDAndCancelButton';

const cancelWindowIcon = <FontAwesomeIcon icon={faTimes} />;

const SavePressetesModalWindow = (props) => {
  const { saveButtonClick, cancelButtonClickOrKeyEscDown } = props;

  return (
    <div
      role="button"
      className="modalSavePressetesWindow"
      id="modalSavePressetesWindow"
      tabIndex="0"
      onKeyDown={cancelButtonClickOrKeyEscDown}
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
          onClickHandler={cancelButtonClickOrKeyEscDown}
          buttonTitle="Close"
        />
      </div>
    </div>
  );
};

SavePressetesModalWindow.propTypes = {
  saveButtonClick: PropTypes.func.isRequired,
  cancelButtonClickOrKeyEscDown: PropTypes.func.isRequired,
};

export default SavePressetesModalWindow;
