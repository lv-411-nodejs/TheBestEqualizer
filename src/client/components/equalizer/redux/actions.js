import {createAudioData,playPauseSoundFromFile, createStreamData, startMuteStreamAudio, mergeCanvasWidth} from './types'


//audio data actions
// export const baseaudiocontextandanaliser = (data)=>dispatch({type: 'baseAudioContextAnanaliser', payload: data});
export const createAudioData = (data)=>dispatch({type: createAudioData, payload: data});  
export const playPauseSoundFromFile = ()=>dispatch({type: playPauseSoundFromFile});
export const createStreamData = (data)=>dispatch({type: createStreamData, payload: data});
export const startMuteStreamAudio = ()=>dispatch({type: startMuteStreamAudio});
export const mergeCanvasWidth = (e)=>dispatch({type: mergeCanvasWidth, payload: e.target.value})