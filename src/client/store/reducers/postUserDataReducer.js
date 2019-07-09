import * as actionTypes from '../actions/types';
import { updateObject } from '../../helpers/utility';

const initialState = {
  status: null,
  loading: false,
};

const authStart = (state) => updateObject( state, { loading: true } );
const authSuccess = (state, action) => updateObject( state, { status: action.status, loading: false } );

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state);
    case actionTypes.POST_USER_DATA: return authSuccess(state, action);
    default:
      return state;
  }
}
