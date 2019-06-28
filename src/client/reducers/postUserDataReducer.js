import { POST_USER_DATA } from '../actions/types';

const initialState = {
  postuser: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_USER_DATA:
      return {
        ...state,
        postUser: action.result,
      };
    default:
      return state;
  }
}
