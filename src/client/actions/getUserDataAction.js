import {GET_USER_DATA} from './types';
import Axios from 'axios';

export const getUserData = () => dispatch => {
    Axios.get('http://localhost:8080/login')
        .then((resp) => {
            const user = resp.data;
            dispatch({
            type: GET_USER_DATA,
            result: user
        });
    });
};
