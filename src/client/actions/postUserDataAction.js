import {POST_USER_DATA} from './types';
import Axios from 'axios';

export const postUserData = (newUser) => dispatch => {
    Axios.post('http://localhost:8080/registration', newUser)
        .then(({data}) => {
            dispatch({
            type: POST_USER_DATA,
            result: data
        });
    });
};
