import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import {connect} from './node_modules/react-redux';

const PlayButton = (props) => (
        <button onClick={props.hadlesound}>
             Play
        </button>
    );

PlayButton.propTypes = {
    hadlesound: PropTypes.func.isRequired
  };

export default connect()(PlayButton);
