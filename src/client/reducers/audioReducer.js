import { CREATE_AUDIO_DATA, PLAY_PAUSE_SOUND_FROM_FILE, CREATE_STREAME_DATA, START_MUTE_STREAME_AUDIO, MERGE_CANVAS_WIDTH } from '../actions/types';

const context = new (window.AudioContext || window.webkitAudioContext)();    
const analyser = context.createAnalyser();

const initialState={  
    //graphic canvas 
     widthCanvas: 500,
     heightCanvas: 150, 
    //audio from file
     trackName: undefined,     
     trackType: undefined,
     trackSize: undefined,     
     audioContext: context,
     analyser: analyser,
     audioFile: undefined,
     audioFromFile: undefined,
     audioFromFileSource: undefined,
    //from stream
     audioStream: undefined,
     streamSource: undefined,     
     playPauseState: false,
     startMuteState: false
};


export default function (state=initialState, action){
    
    switch(action.type){
        case CREATE_AUDIO_DATA: {  
            const {name: trackName, type: trackType, size: trackSize, file: audioFile, audio: audioFromFile, source: audioFromFileSource} = action.payload;                                            
            return {
                ...state,
                trackName,
                trackType,
                trackSize,
                audioFile,
                audioFromFile,
                audioFromFileSource
                };
            }
        case PLAY_PAUSE_SOUND_FROM_FILE:
            return {
                ...state,
                playPauseState: !(state.playPauseState)
            };
        case CREATE_STREAME_DATA: {
            const {audioLineIn: audioStream, sourceStream: streamSource} = action.payload;
            return {
                ...state,
                audioStream,
                streamSource
                };
            }     
        case START_MUTE_STREAME_AUDIO:
                return {
                    ...state,
                    startMuteState: !(state.startMuteState)
                };    
        case MERGE_CANVAS_WIDTH:
            return {
                ...state,
                widthCanvas: action.payload
            };          
        default: return state;
    }  
}
