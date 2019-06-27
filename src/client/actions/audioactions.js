import {CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER, CREATE_AUDIO_DATA, PLAY_PAUSE_SOUND_FROM_FILE, CREATE_STREAME_DATA, START_MUTE_STREAME_AUDIO, MERGE_CANVAS_WIDTH } from './types';

//audio data actions
export const createBaseAudioContextAndAnalyser = (data) => dispatch => dispatch({type: CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER, payload: data});
export const createAudioData = (data)=> dispatch => dispatch({type: CREATE_AUDIO_DATA, payload: data});  
export const playPauseSoundFromFile = () => dispatch => dispatch({type: PLAY_PAUSE_SOUND_FROM_FILE});
export const createStreamData = (data) => dispatch => dispatch({type: CREATE_STREAME_DATA, payload: data});
export const startMuteStreamAudio = () => dispatch => dispatch({type: START_MUTE_STREAME_AUDIO});
export const mergeCanvasWidth = (e) => dispatch => dispatch({type: MERGE_CANVAS_WIDTH, payload: e.target.value});
