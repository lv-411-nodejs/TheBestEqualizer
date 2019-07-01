import axios from "axios";
import { POST_USER_DATA } from './types';

const baseUrl = 'http://localhost:8080';

const postUserData = (rout, newUser, history) => async (dispatch) => {
  try {
    await axios.post(`${baseUrl}${rout}`, newUser)

    dispatch({
       type: POST_USER_DATA,
       status: 'Success authentification'
      });

    history.push('/main');

  } catch({response: {data: {error}}}) {
    dispatch({
        type: POST_USER_DATA,
        status: 'Authentification was failed'
    });
    console.error(error);
  }
};

export default postUserData;
