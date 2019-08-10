import fetchRequest from '../../helpers/fetchRequest';
import {
  HOST,
  JAZZ_PRESET_ARRAY,
  ROCK_PRESET_ARRAY,
  POP_PRESET_ARRAY,
} from '../../helpers/constants';

import {
  SET_VISIBILITY,
  SET_ROCK_PRESET,
  SET_JAZZ_PRESET,
  SET_POP_PRESET,
  SET_USER_PRESET,
  SET_DEFAULT_PRESET,
} from './types';

export const setVisibility = blockName => ({ type: SET_VISIBILITY, blockName });

export const setPresetValue = (chosenPresetName, blocksData) => async (dispatch) => {
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
        console.log(POP_PRESET_ARRAY);
      dispatch({
        type: SET_POP_PRESET,
        popPresetArray: POP_PRESET_ARRAY,
      });
      break;
    default:
      const response = await fetchRequest
        .get(`${HOST}/effects`, { params: { title: chosenPresetName } })
      const userPresetArray = blocksData.map((effectFromStore, i) => {
        const { effects, createEffect } = effectFromStore;
        const eff = { ...effects };
        Object.keys(effects).forEach(effectsName => {
          eff[effectsName].value = response.data.presets[i].effects[effectsName].value;
        });
        // const ceff = { ...createEffect };
        Object.keys(effects).forEach(effectsName => {
          effects[effectsName].value = response.data.presets[i].effects[effectsName].value;
          createEffect[effectsName] = response.data.presets[i].effects[effectsName].value;
        });
        // const f = { ...response.data.presets[i] };
        // console.log(f);
        return { ...effectFromStore, effects: { ...eff }, isVisible: response.data.presets[i].isVisible };
      });
      console.log(userPresetArray);
      dispatch({
        type: SET_USER_PRESET,
        userPresetArray,
      });
  }
};
