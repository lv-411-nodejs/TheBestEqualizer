import React from 'react';
import PropTypes from 'prop-types';

const GraphicEqualiser = (props) => (
        <div>
            <canvas width={props.width} height={props.height}> 
            </canvas> 
            <br />
            <input type="range" min="100" max="1000" step="10" 
                    defaultValue={props.width} name="rangecanvas" id="range" onChange={props.onchange}/>
        </div>
        );

GraphicEqualiser.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onchange: PropTypes.func.isRequired   
  };

export default GraphicEqualiser;
