import React from 'react';
import './modalSaveWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cancelWindowIcon = <FontAwesomeIcon icon={faTimes}/>;

const SavePressetesModalWindow = () => (
        <div className="modalSaveWindow">
            {cancelWindowIcon} 
            <strong>Please type presset's name</strong> 
            <ins>Errors/success</ins>
            <input type="text"></input> 
            <div className="pressetesButtons">
                <button className="pressetesButton" id="savePressetesButton">Save</button>
                <button className="pressetesButton" id="cancelPressetesButton">Cancel</button>
            </div>    
        </div>
    )



export default SavePressetesModalWindow;