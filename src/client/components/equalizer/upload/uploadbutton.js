import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const UploadButton = (props) => {    
    return(
        <label > Виберіть трек для завантаження 
        <input type="file" id="soundsource" accept="audio/mp3" onChange={props.handleInfoFromSound} />
        </label>);
};

UploadButton.propTypes = {
    handleInfoFromSound: PropTypes.func.isRequired
  };

export default connect()(UploadButton);
