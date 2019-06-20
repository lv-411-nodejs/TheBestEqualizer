import {POST_USER_DATA} from './types';
import Axios from 'axios';

export const postUserData = (newUser) => dispatch => {
    Axios.post('http://localhost:8080/registration', newUser)
    .then(resp => {
        const user = resp.data;
        dispatch({
        type: POST_USER_DATA,
        result: user
        });
    });
};
