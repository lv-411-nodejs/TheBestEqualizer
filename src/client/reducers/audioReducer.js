import {
  CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER,
  CREATE_AUDIO_DATA,
  PLAY_PAUSE_SOUND_FROM_FILE,
  CREATE_STREAME_DATA,
  START_MUTE_STREAME_AUDIO,
  MERGE_CANVAS_WIDTH,
} from '../actions/types';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();

const initialState = {
  // graphic canvas
  widthCanvas: 500,
  heightCanvas: 150,
  // audio from file
  trackName: null,
  trackType: null,
  trackSize: null,
  audioContext,
  analyser,
  audioFile: null,
  audioFromFile: null,
  audioFromFileSource: null,
  // from stream
  audioStream: null,
  streamSource: null,
  playPauseState: false,
  startMuteState: false,
};


export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER: {
      // const { audioContext, analyser } = action.payload;
      return {
        ...state,
      };
    }
    case CREATE_AUDIO_DATA: {
      const {
        trackName, trackSize, trackType, audioFile, audioFromFile, audioFromFileSource,
      } = action.payload;
      return {
        ...state,
        trackName,
        trackType,
        trackSize,
        audioFile,
        audioFromFile,
        audioFromFileSource,
      };
    }
    case PLAY_PAUSE_SOUND_FROM_FILE:
      return {
        ...state,
        playPauseState: !state.playPauseState,
      };
    case CREATE_STREAME_DATA: {
      const { audioLineIn, sourceStream: streamSource } = action.payload;
      return {
        ...state,
        audioStream: audioLineIn,
        streamSource,
      };
    }
    case START_MUTE_STREAME_AUDIO:
      return {
        ...state,
        startMuteState: !state.startMuteState,
      };
    case MERGE_CANVAS_WIDTH: {
      const widthCanvas = parseInt(action.payload, 10);
      return {
        ...state,
        widthCanvas,
      };
    }
    default: return state;
  }
}
