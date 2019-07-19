import {
  ADD_NEW_USER_PRESET_FROM_INPUT,
  ADD_NEW_USER_PRESET_FROM_DB,
} from '../actions/types';

const initialState = ['Default', 'Jazz', 'Rock', 'Pop'];

export default function (state = initialState, action) {
  switch (action.type) {
    // here will be push in current state using [...,]
    case ADD_NEW_USER_PRESET_FROM_DB: {
      // return newState = [...state, ]
      return 'ADD_NEW_USER_PRESET_FROM_DB';
    }
    // here will be push too using [...,]
    case ADD_NEW_USER_PRESET_FROM_INPUT: {
      return 'ADD_NEW_USER_PRESET_FROM_INPUT';
    }
    default:
      return state;
  }
}
