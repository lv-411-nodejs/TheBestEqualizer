import React from 'react';
import PropTypes from 'prop-types';

const Graphicequaliser=(props)=>{
    return(
        <div>
            <canvas id="graphicequalizer" width={props.width} height={props.height}> 
            </canvas> 
            <br />
            <input type="range" min="100" max="1000" step="10" 
                    defaultValue={props.width} name="rangecanvas" id="range" onChange={props.onchange}/>
        </div>);
    };

Graphicequaliser.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onchange: PropTypes.func.isRequired   
  };

export default Graphicequaliser;
