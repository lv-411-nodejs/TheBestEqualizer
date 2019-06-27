import { CREATE_AUDIO_DATA, PLAY_PAUSE_SOUND_FROM_FILE, CREATE_STREAME_DATA, START_MUTE_STREAME_AUDIO, MERGE_CANVAS_WIDTH } from '../actions/types';

const context = new (window.AudioContext || window.webkitAudioContext)();    
const analyser = context.createAnalyser();

const initialState = {  
    //graphic canvas 
     widthCanvas: 500,
     heightCanvas: 150, 
    //audio from file
     trackName: null,     
     trackType: null,
     trackSize: null,     
     audioContext: context,
     analyser: analyser,
     audioFile: null,
     audioFromFile: null,
     audioFromFileSource: null,
    //from stream
     audioStream: null,
     streamSource: null,     
     playPauseState: false,
     startMuteState: false
};


export default function (state=initialState, action){
    
    switch(action.type){
        case CREATE_AUDIO_DATA:{  
            let {trackName, trackSize, trackType, audioFile, audioFromFile, audioFromFileSource} = action.payload;                                                        
            return {
                ...state,
                trackName,
                trackType,
                trackSize,
                audioFile,
                audioFromFile,
                audioFromFileSource 
            }
            };            
        case PLAY_PAUSE_SOUND_FROM_FILE:
            return {
                ...state,
                playPauseState: !state.playPauseState
            };
        case CREATE_STREAME_DATA: {
            let {audioLineIn: audioLineIn, sourceStream: streamSource} = action.payload;
            return {
                ...state,
                audioStream: audioLineIn,
                streamSource: streamSource
                };
            }     
        case START_MUTE_STREAME_AUDIO:             
                return {
                    ...state,
                    startMuteState: !state.startMuteState                
                };    
        case MERGE_CANVAS_WIDTH: {
            let widthCanvas = parseInt(action.payload, 10)
            return {
                ...state,
                widthCanvas
            }
            };          
        default: return state;
    }  
}
