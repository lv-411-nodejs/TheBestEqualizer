import React from 'react';
import './formField.css';

const FormField = ({el: {name, label, type}, onInputChange}) => {
    return (
        <div>
            <label className='label'>{label}</label>
            <div className="field">
                <input onChange={onInputChange} name={name} type={type}/>
            </div>
        </div>
    );
};

export default FormFild;
