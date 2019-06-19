import React from 'react';
import './formFild.css';

const FormFild = ({el: {name, label, type}, onInputChange}) => {
    return (
        <div>
            <label className='label'>{label}</label>
            <div className="field">
                <input onChange={onInputChange} name={name} type={type}/>
            </div>
        </div>
    )
}
export default FormFild;