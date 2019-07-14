import reducer, { initialState } from './audioReducer'
import Pizzicato from 'pizzicato';

import {    
    CREATE_AUDIO_DATA,
    PLAY_PAUSE_SOUND_FROM_FILE,
    CREATE_STREAME_DATA,
    START_MUTE_STREAME_AUDIO,
    MERGE_CANVAS_WIDTH,
  } from '../actions/types';  

  jest.mock('pizzicato', () =>{
    const myMock = jest.fn();
          myMock.context=jest.fn(()=>{});
          myMock.context.createAnalyser = jest.fn(() => 'analyser');    
    return {
      __esModule: true,
      default: myMock,
      }
  })

  describe('test audio reducer', () => {      
    const state = {
      ...initialState,
    }    
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
    it('PLAY PAUSE SOUND FROM FILE', () => {
      const action = {
          type: PLAY_PAUSE_SOUND_FROM_FILE,          
      }

  expect(reducer(state, action)).toEqual({
      ...state,        
      playPauseState: !state.playPauseState,       
  })    
  }) 
  })