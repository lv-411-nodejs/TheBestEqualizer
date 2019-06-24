import React from 'react';
import PropTypes from 'prop-types';
import './formField.css';

const FormField = ({el: {name, label, type}, onInputChange}) => (
        <div>
            <label className='label'>{label}</label>
            <div className="field">
                <input onChange={onInputChange} name={name} type={type}/>
            </div>
        </div>
    );


FormField.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    el: PropTypes.object.isRequired
};

export default FormField;