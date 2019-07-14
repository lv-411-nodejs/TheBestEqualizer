import axios from 'axios';
import * as actionTypes from './types';

const baseUrl = 'http://localhost:8080';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = status => ({
  type: actionTypes.POST_USER_DATA,
  status,
});

export const authFail = (status, error) => ({
  type: actionTypes.AUTH_FAIL,
  status,
  error,
});

export const postUserData = (path, newUser, history) => (dispatch) => {
  dispatch(authStart());
  axios.post(`${baseUrl}${path}`, newUser)
    .then(() => {
      dispatch(authSuccess('Success authentification'));
    })
    .then(() => {
      history.push('/main');
    })
    .catch(({ response: { data: { error } } }) => {
      dispatch(authFail('Authentification was failed', error));
      console.error(error);
    });
};

export default postUserData;
