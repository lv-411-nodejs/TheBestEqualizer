import {
  SET_VISIBILITY,
  SET_ROCK_PRESET,
  SET_JAZZ_PRESET,
  SET_RAP_PRESET,
} from './types';

export const setVisibility = blockName => ({ type: SET_VISIBILITY, blockName });

export const setPresetValue = chosenPresetName => (dispatch) => {
  if (chosenPresetName === 'Rock') {
    dispatch(
      { type: SET_ROCK_PRESET },
    );
  } else if (chosenPresetName === 'Jazz') {
    dispatch(
      { type: SET_JAZZ_PRESET },
    );
  } else if (chosenPresetName === 'Rap') {
    dispatch(
      { type: SET_RAP_PRESET },
    );
  }
};
