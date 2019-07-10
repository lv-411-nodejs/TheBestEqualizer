import {
    CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER,
    CREATE_AUDIO_DATA,
    PLAY_PAUSE_SOUND_FROM_FILE,
    CREATE_STREAME_DATA,
    START_MUTE_STREAME_AUDIO,
    MERGE_CANVAS_WIDTH,
  } from '../actions/types';

  import reducer, { initialState } from './audioReducer'

  describe('test audio reducer', () => {

    it('CREATE_AUDIO_DATA', () => {
        const action = {
            type: CREATE_AUDIO_DATA,
            payload: {
                trackName: 'someTrackName',
                sound: 'someSoundName',
            }
        }

    expect(reducer(initialState, action).toEqual({
        ...initialState,
        trackName: action.payload,        
        sound: action.payload,
    }))    
    }) 
  })