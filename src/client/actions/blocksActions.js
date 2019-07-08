import {
  SET_EFFECT,
  SET_VISIBILITY,
} from './types';

export const setVisibility = blockName => ({ type: SET_VISIBILITY, blockName });
export const setEffect = (blockName, effectName, value) => ({
  type: SET_EFFECT, blockName, effectName, value,
});
