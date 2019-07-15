import {
  SET_VISIBILITY,
  SET_ROCK_PRESET,
  SET_JAZZ_PRESET,
  SET_RAP_PRESET,
} from './types';

export const setVisibility = blockName => ({ type: SET_VISIBILITY, blockName });

export const setPresetValue = chosenPresetName => (dispatch) => {

  switch (chosenPresetName) {
    case 'Rock':
      dispatch({ type: SET_ROCK_PRESET });
      break;
    case 'Jazz':
      dispatch({ type: SET_JAZZ_PRESET });
      break;
    case 'Rap':
      dispatch({ type: SET_RAP_PRESET });
      break;
    default:
      return null;
  }
};
