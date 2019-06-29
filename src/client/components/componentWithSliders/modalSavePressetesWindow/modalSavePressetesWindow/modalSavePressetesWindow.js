import React from 'react';
import PropTypes from 'prop-types';
import SavePressetsToBDAndCancelButton from './savePressetsToBDAndCancelButton'
import './modalSavePressetesWindow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cancelWindowIcon = <FontAwesomeIcon icon={faTimes}/>;

const SavePressetesModalWindow = (props) => {
    const { saveButtonClick, cancelButtonclick } = props;

    return(
        <div className="modalSaveWindow">
            <div className="headerModalWindow">
                {cancelWindowIcon} 
            </div>
            <div className="textArea">
                <strong>Please type presset`&#39;`s name</strong>             
                <input type="text"></input> 
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
                    onClickHandler={cancelButtonclick}
                    buttonTitle="Close"
                    />                
            </div>    
        </div>
    );
};

SavePressetesModalWindow.propTypes = {
    saveButtonClick: PropTypes.func.isRequired,
    cancelButtonclick: PropTypes.func.isRequired,
};

export default SavePressetesModalWindow;

