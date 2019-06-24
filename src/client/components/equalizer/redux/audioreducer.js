import {createAudioData,playPauseSoundFromFile, createStreamData, startMuteStreamAudio, mergeCanvasWidth} from './types'

var context = new (window.AudioContext || window.webkitAudioContext)();    
var analyser = context.createAnalyser();


const initialState={  
    //graphic canvas 
     widthCanvas: 400, 
    //audio from file
     trackname: undefined,     
     tracktype: undefined,
     tracksize: undefined,     
     audiocontext: context,
     analyser: analyser,
     audioFile: undefined,
     audioFromFile: undefined,
     audioFromFileSource: undefined,
    //from stream
     audioStream: undefined,
     streamSource: undefined,     
     playpausestate: false,
     startmutesstate: false
}


export default function rootReducer(state=initialState, action){
    
    switch(action.type){
        case createAudioData:                         
            return {
                ...state,
                trackname: action.payload.name,
                tracktype: action.payload.type,
                tracksize: action.payload.size,                
                audioFile: action.payload.file,
                audioFromFile: action.payload.audio,
                audioFromFileSource: action.payload.source
                    } 
        case playPauseSoundFromFile:
            return {
                ...state,
                playpausestate: !(state.playpausestate)
            }
        case createStreamData:
            return {
                ...state,
                audioStream: action.payload.audiolinein,
                streamSource: action.payload.sourcestream
                }      
        case startMuteStreamAudio:
                return {
                    ...state,
                    startmutesstate: !(state.startmutesstate)
                }    
        case mergeCanvasWidth:
            return {
                ...state,
                widthCanvas: action.payload
            }          
        default: return state
    }  
}