import reducer, { initialState } from './audioReducer'


import {
    CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER,
    CREATE_AUDIO_DATA,
    PLAY_PAUSE_SOUND_FROM_FILE,
    CREATE_STREAME_DATA,
    START_MUTE_STREAME_AUDIO,
    MERGE_CANVAS_WIDTH,
  } from '../actions/types';

  const mockValues = {
    audioContext: 'fakeContext',
    createAnalyser: 'fakeAnalyser',
  };
  jest.mock('pizzicato', () => mockValues);


// jest.mock("pizzicato", () => ({
//   `Pizzicato.context`: jest.fn(),
//   analyser: jest.fn(),
// }));
  
  
  //  var focusOnTargetSpy = jest.fn();
  // jest
  //   .spyOn(Pizzicato.context, 'createAnalyser')
  //   .mockImplementation(focusOnTargetSpy);


  describe('test audio reducer', () => {
      
    const state = {
      ...initialState,
      audioContext: null,
      analyser: null,
    }
    console.log(initialState)

    it('CREATE AUDIO DATA', () => {
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
  })