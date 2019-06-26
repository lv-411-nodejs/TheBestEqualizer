import React from 'react';
import './modalSaveWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cancelWindowIcon = <FontAwesomeIcon icon={faTimes}/>;

const SavePressetesModalWindow = (props) => (
        <div className="modalSaveWindow">
            <div className="headerModalWindow">
                {cancelWindowIcon} 
            </div>
            <div className="textArea">
                <strong>Please type presset's name</strong>             
                <input type="text"></input> 
                <ins>Errors/success</ins>
            </div>
            <div className="pressetesButtons">
                <button className="pressetesButton" id="savePressetesButton">Save</button>
                <button className="pressetesButton" id="cancelPressetesButton" onClick={props.onclick}>Cancel</button>
            </div>    
        </div>
    )

export default SavePressetesModalWindow;

