import fetchRequest from '../../helpers/fetchRequest';

import {
  SET_VISIBILITY,
  SET_ROCK_PRESET,
  SET_JAZZ_PRESET,
  SET_POP_PRESET,
  SET_USER_PRESET,
  SET_DEFAULT_PRESET,
} from './types';

import {
  JAZZ_PRESET_ARRAY,
  ROCK_PRESET_ARRAY,
  POP_PRESET_ARRAY,
} from '../../helpers/constants';

export const setVisibility = blockName => ({ type: SET_VISIBILITY, blockName });

export const setPresetValue = chosenPresetName => (dispatch) => {
  switch (chosenPresetName) {
    case 'Default':
      dispatch({
        type: SET_DEFAULT_PRESET,
      });
      break;
    case 'Jazz':
      dispatch({
        type: SET_JAZZ_PRESET,
        jazzPresetArray: JAZZ_PRESET_ARRAY,
      });
      break;
    case 'Rock':
      dispatch({
        type: SET_ROCK_PRESET,
        rockPresetArray: ROCK_PRESET_ARRAY,
      });
      break;
    case 'Pop':
      dispatch({
        type: SET_POP_PRESET,
        popPresetArray: POP_PRESET_ARRAY,
      });
      break;
    default:
      fetchRequest.get('http://localhost:8080/effects',
        { params: { title: chosenPresetName } })
        .then(response => dispatch(
          { type: SET_USER_PRESET, userPresetArray: response.data.presets },
        ));
  }
};
