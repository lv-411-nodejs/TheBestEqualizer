import reducer, {
  initialState
} from './audioReducer'

import {
  CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER,
  START_CREATION_AUDIO_DATA,
  CREATE_AUDIO_DATA,
  PLAY_PAUSE_SOUND_FROM_FILE,
  CREATE_STREAME_DATA,
  START_MUTE_STREAME_AUDIO,
  MERGE_CANVAS_WIDTH,
} from '../actions/types';

const FAKE_REDUCER = 'FAKE_REDUCER';

jest.mock('pizzicato', () => {
  const mockPizzicato = jest.fn();
  mockPizzicato.context = jest.fn(() => {});
  mockPizzicato.context.createAnalyser = jest.fn(() => 'analyser');
  return {
    __esModule: true,
    default: mockPizzicato,
  }
})

describe('test audio reducer', () => {
  const state = {
    ...initialState,
  }

  it('SHOULD CREATE BASE AUDIOCONTEXT AND ANALYSER:', () => {
    const action = {
      type: CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER,
    }
    
    expect(reducer(state, action)).toEqual({
      ...state,      
    })
  })

  it('SHOULD START CREATE AUDIO DATA', () => {
    const action = {
      type: START_CREATION_AUDIO_DATA,
      payload: {
        loading: true,
      }
    }

    expect(reducer(state, action)).toEqual({
      ...state,
      ...action.payload,
    })
  })


  it('SHOULD CREATE AUDIO DATA', () => {
    const action = {
      type: CREATE_AUDIO_DATA,
      payload: {
        trackName: 'someTrackName',
        sound: 'someSoundName',
      }
    }

    expect(reducer(state, action)).toEqual({
      ...state,
      ...action.payload,
    })
  })

  it('SHOULD PLAY PAUSE SOUND FROM FILE', () => {
    const action = {
      type: PLAY_PAUSE_SOUND_FROM_FILE,
    }

    expect(reducer(state, action)).toEqual({
      ...state,
      playPauseState: !state.playPauseState,
    })
  })

  it('SHOULD CREATE STREAME DATA', () => {
    const action = {
      type: CREATE_STREAME_DATA,
      payload: {
        voice: 'voice',
      }
    }

    expect(reducer(state, action)).toEqual({
      ...state,
      ...action.payload,
    })
  })

  it('SHOULD START_MUTE_STREAME_AUDIO', () => {
    const action = {
      type: START_MUTE_STREAME_AUDIO,
    }

    expect(reducer(state, action)).toEqual({
      ...state,
      startMuteState: !state.startMuteState,
    })
  }) 

  it('SHOULD MERGE CANVAS WIDTH', () => {
    const action = {
      type: MERGE_CANVAS_WIDTH,
      payload: {
        widthCanvas: 100,
      }
    }
    
    expect(reducer(state, action)).toEqual({
      ...state,
      ...action.payload,
    })
  })

  it('SHOULD PASS FAKE REDUCER', () => {
    const action = {
      type: FAKE_REDUCER,
    }
    
    expect(reducer(state, action)).toEqual({
      ...state,      
    })
  })

})
