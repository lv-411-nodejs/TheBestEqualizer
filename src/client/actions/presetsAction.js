import { SET_ROCK_PRESET, SET_JAZZ_PRESET, SET_RAP_PRESET } from './types';

export const setPresetValue = chosenPresetName => (dispatch) => {
  if (chosenPresetName === 'Rock') {
    console.log('IN ROCK')
    dispatch(
      { type: SET_ROCK_PRESET },
    );
  } else if (chosenPresetName === 'Jazz') {
    console.log('IN JAZZ')
    dispatch(
      { type: SET_JAZZ_PRESET },
    );
  } else if (chosenPresetName === 'Rap') {
    console.log('IN RAP')
    dispatch(
      { type: SET_RAP_PRESET },
    );
  }
};
