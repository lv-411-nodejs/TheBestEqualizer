import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cancelWindowIcon = <FontAwesomeIcon icon={faTimes}/>;

const SavePressetesModalWindow = () => {
    return (
        <div className="modalSaveWindow">
            {cancelWindowIcon}
            <strong>Please type</strong>
            <button className="SaveButton">Save</button>
        </div>


    )
}


export default SavePressetesModalWindow;