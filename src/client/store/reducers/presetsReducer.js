import {
  ADD_NEW_USER_PRESET_FROM_INPUT,
  ADD_NEW_USER_PRESET_FROM_DB,
} from '../actions/types';

const initialState = ['Jazz', 'Rock', 'Pop'];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_USER_PRESET_FROM_DB: {
      return [
        ...state,
        ...action.userPresets.map(currentObject => currentObject.title),
      ];
    }
    case ADD_NEW_USER_PRESET_FROM_INPUT: {
      return 'ADD_NEW_USER_PRESET_FROM_INPUT';
    }
    default:
      return state;
  }
}
