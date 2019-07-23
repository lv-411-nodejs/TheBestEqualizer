import axios from 'axios';
import * as actionTypes from './types';

const baseUrl = 'https://thebestaqualizer.herokuapp.com';

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
    if (response) {
      dispatch(authSuccess('Success authentification'));
      history.push('/main');
    }
    return response;
  } catch ({ response: { data: { error } } }) {
    dispatch(authFail('Authentification was failed', error));
    return error;
  }
};

export default postUserData;
