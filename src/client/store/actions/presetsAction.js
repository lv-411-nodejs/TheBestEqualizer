import {
  ADD_NEW_USER_PRESET_FROM_INPUT,
  ADD_NEW_USER_PRESET_FROM_DB,
} from './types';

export const addNewPresetsFromDB = arrayOfPresets => (dispatch) => {
  dispatch({ type: ADD_NEW_USER_PRESET_FROM_DB, arrayOfPresets });
};

export const addNewPresetFromInput = newSavedPreset => (dispatch) => {
  dispatch({ type: ADD_NEW_USER_PRESET_FROM_INPUT, newSavedPreset });
};
