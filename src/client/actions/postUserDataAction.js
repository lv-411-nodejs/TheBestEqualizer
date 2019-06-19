import {POST_USER_DATA} from './types';
import Axios from 'axios';

export const postUserData = (newUser) => dispatch => {
    console.log('Registration');
    Axios.post('http://localhost:8080/registration', {
            firstname : "a", 
            lastname : "b", 
            email : "c@d", 
            password : "efg"
        }
    )
    .then(user => {
        console.log(user)
        dispatch({
        type: POST_USER_DATA,
        result: user
    })
    })
}