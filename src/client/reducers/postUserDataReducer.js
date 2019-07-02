import { POST_USER_DATA } from '../actions/types';

const initialState = {
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_USER_DATA:
      return {
        status: action.status,
      };
    default:
      return state;
  }
}
