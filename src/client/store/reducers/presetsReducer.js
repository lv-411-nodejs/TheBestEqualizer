import {
  SET_ROCK_PRESET,
  SET_JAZZ_PRESET,
  SET_RAP_PRESET,
} from '../actions/types';

export default function (state = 'Default value', action) {
  switch (action.type) {
    // will return initial state (because jazz using by default)
    case SET_JAZZ_PRESET:
      return {
        JAZZ: 'JAZZ',
      };
    case SET_ROCK_PRESET:
      return {
        ROCK: 'ROCK',
      };
    case SET_RAP_PRESET:
      return {
        RAP: 'RAP',
      };

    default: return state;
  }
}
