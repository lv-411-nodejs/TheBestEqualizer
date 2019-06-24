import { CREATE_AUDIO_DATA, PLAY_PAUSE_SOUND_FROM_FILE, CREATE_STREAME_DATA, START_MUTE_STREAME_AUDIO, MERGE_CANVAS_WIDTH } from '../actions/types';

var context = new (window.AudioContext || window.webkitAudioContext)();    
var analyser = context.createAnalyser();


const initialState={  
    //graphic canvas 
     widthCanvas: 500, 
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
     startMuteState: false
}


export default function (state=initialState, action){
    
    switch(action.type){
        case CREATE_AUDIO_DATA:                         
            return {
                ...state,
                trackname: action.payload.name,
                tracktype: action.payload.type,
                tracksize: action.payload.size,                
                audioFile: action.payload.file,
                audioFromFile: action.payload.audio,
                audioFromFileSource: action.payload.source
                    } 
        case PLAY_PAUSE_SOUND_FROM_FILE:
            return {
                ...state,
                playpausestate: !(state.playpausestate)
            }
        case CREATE_STREAME_DATA:
            return {
                ...state,
                audioStream: action.payload.audioLineIn,
                streamSource: action.payload.sourceStream
                }      
        case START_MUTE_STREAME_AUDIO:
                return {
                    ...state,
                    startMuteState: !(state.startMuteState)
                }    
        case MERGE_CANVAS_WIDTH:
            return {
                ...state,
                widthCanvas: action.payload
            }          
        default: return state
    }  
}
