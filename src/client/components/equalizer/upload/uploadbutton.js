import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Uploadbutton=(props)=>{    
    return(
        <label > Виберіть трек для завантаження 
        <input type="file" id="soundsource" accept="audio/mp3" onChange={props.handleInfoFromSound} />
        </label>);
};

Uploadbutton.propTypes = {
    handleInfoFromSound: PropTypes.func.isRequired
  };

export default connect()(Uploadbutton);
