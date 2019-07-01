import axios from 'axios';
import { POST_USER_DATA } from './types';

const baseUrl = 'http://localhost:8080';

const postUserData = (path, newUser, history) => (dispatch) => {
    axios.post(`${baseUrl}${path}`, newUser)
    .then(()=>{dispatch({
        type: POST_USER_DATA,
        status: 'Success authentification',
      })
    })
    .then(()=>{
      history.push('/main');
    })
    .catch(({ response: { data: { error } } })=>{
      dispatch({
        type: POST_USER_DATA,
        status: 'Authentification was failed',
      });
      console.error(error);
    });
};

export default postUserData;
