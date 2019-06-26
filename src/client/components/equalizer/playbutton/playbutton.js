import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const PlayButton = (props) => (
        <button onClick={props.hadlesound}>
             Play
        </button>
    );

PlayButton.propTypes = {
    hadlesound: PropTypes.func.isRequired
  };

export default connect()(PlayButton);
