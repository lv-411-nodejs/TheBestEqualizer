import React from 'react';

const Equlizer=(props)=>{
    return(
        <div>
            <canvas id="graphicequalizer" width={props.width} height={props.height} src={props.src}> 
            </canvas> 
            <br />
            <input type="range" min="100" max="1000" step="10" 
                    defaultValue="400" name="rangecanvas" id="range" onChange={props.onchange} />
        </div>    
    )
}

export default Equlizer;
