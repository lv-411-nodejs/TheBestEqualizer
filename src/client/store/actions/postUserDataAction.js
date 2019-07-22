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
  dispatch(authStart());
  let response;
  await axios.post(`${baseUrl}${path}`, newUser)
    .then(({ data: { username, token: { access } } }) => {
      dispatch(authSuccess(username));
      localStorage.setItem('_token', access);
      localStorage.setItem('username', username);
    })
    .then(() => {
      history.push('/main');
    })
    .catch(({ response: { data: { error } } }) => {
      dispatch(authFail(error));
      response = error;
    });

  return response;
};

export default postUserData;
