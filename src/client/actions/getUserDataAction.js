import Axios from 'axios';
import { GET_USER_DATA } from './types';

const getUserData = () => (dispatch) => {
  Axios.get('http://localhost:8080/login')
    .then(({ data }) => {
      dispatch({
        type: GET_USER_DATA,
        result: data,
      });
    });
};

export default getUserData;
