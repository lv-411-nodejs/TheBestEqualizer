import React from 'react'
import {connect} from 'react-redux'

const PlayButton=(props)=>{
    return(
        <button onClick={props.hadlesound}>
             Play
        </button>
    )
}

export default connect()(PlayButton)