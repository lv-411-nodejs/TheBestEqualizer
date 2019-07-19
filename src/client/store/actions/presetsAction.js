import {
  ADD_NEW_USER_PRESET_FROM_INPUT,
  ADD_NEW_USER_PRESET_FROM_DB,
} from './types';

export const addNewPresetsFromDB = userPresets => (dispatch) => {
  dispatch({ type: ADD_NEW_USER_PRESET_FROM_DB, userPresets });
};

export const addNewPresetFromInput = valueFromPresetInput => (dispatch) => {
  console.log(valueFromPresetInput);
  dispatch({ type: ADD_NEW_USER_PRESET_FROM_INPUT, valueFromPresetInput });
};
