import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../button';
import './modalSavePressetesWindow.css';
import { cancelWindowIcon } from '../../../../assets/icons/icons';
import SavePressetsToBDAndCancelButton from './savePressetsToBDAndCancelButton';
import { saveIcon } from '../../../../assets/icons/icons';

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
      <Button
        className="ButtonStyleTemplate"
        // onClick={this.showHideModalBlock}
        icon={saveIcon}
        value="Save"
      />
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
