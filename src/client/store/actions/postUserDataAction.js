import axios from 'axios';
import * as actionTypes from './types';

const baseUrl = 'http://localhost:8080';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = username => ({
  type: actionTypes.POST_USER_DATA,
  username,
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
      dispatch(authSuccess(username));
      localStorage.setItem('_token', access);
      localStorage.setItem('username', username);
      history.push('/main');
    }
    return username;
  } catch ({ response: { data: { error } } }) {
    dispatch(authFail(error));
    return error;
  }
};

export default postUserData;
