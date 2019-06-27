import Axios from 'axios';
import { POST_USER_DATA } from './types';

const postUserData = newUser => (dispatch) => {
  Axios.post('http://localhost:8080/registration', newUser)
    .then(({ data }) => {
      dispatch({
        type: POST_USER_DATA,
        result: data,
      });
    });
};

export default postUserData;
