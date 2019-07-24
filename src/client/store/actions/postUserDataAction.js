import axios from 'axios';
import * as actionTypes from './types';
import { baseUrl } from '../../helpers/constants';

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

export const postUserData = (path, newUser, history) => async (dispatch) => {
  dispatch(authStart());
  let response;
  await axios.post(`${baseUrl}${path}`, newUser)
    .then(() => {
      dispatch(authSuccess('Success authentification'));
    })
    .then(() => {
      history.push('/main');
    })
    .catch(({ response: { data: { error } } }) => {
      dispatch(authFail('Authentification was failed', error));
      response = error;
    });

  return response;
};

export default postUserData;
