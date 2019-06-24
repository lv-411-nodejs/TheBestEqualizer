import React from 'react'
import {connect} from 'react-redux'


const Uploadbutton=(props)=>{
    
    return(
        <label > Виберіть трек для завантаження 
        <input type="file" id="soundsource" accept="audio/mp3" onChange={props.handleinfofromsound} />
        </label>
    )
}

function storedispatch(dispatch){
    return {
        uploadsoundinfo: (e)=>dispatch({type: 'uploadsoundinfo', payload: e.target.files[0]})
    }
  }  

export default connect(null, storedispatch)(Uploadbutton);