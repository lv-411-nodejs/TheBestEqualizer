import React from 'react'
import {connect} from 'react-redux'

const Uploadbutton=(props)=>{    
    return(
        <label > Виберіть трек для завантаження 
        <input type="file" id="soundsource" accept="audio/mp3" onChange={props.handleInfoFromSound} />
        </label>
    )
}


export default connect()(Uploadbutton);
