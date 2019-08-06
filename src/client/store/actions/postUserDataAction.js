import axios from 'axios';
import * as actionTypes from './types';

const baseUrl = 'http://localhost:8080';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = error => ({
  type: actionTypes.POST_USER_DATA,
  error,
});

export const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  error,
});

export const postUserData = (path, newUser, history) => async (dispatch) => {
  try {
    dispatch(authStart());
    const response = await axios.post(`${baseUrl}${path}`, newUser);
    const { data: { username, token: { access } } } = response;
    if (access) {
      dispatch(authSuccess(null));
      localStorage.setItem('_token', access);
      localStorage.setItem('username', username);
      history.push('/main');
    }
    return;
  } catch ({ response: { data: { error } } }) {
    dispatch(authFail(error));
    return error;
  }
};

export default postUserData;
