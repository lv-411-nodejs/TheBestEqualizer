import {GET_USER_DATA} from './types';

export const getUserData = () => dispatch => {
  console.log('Login');
    fetch('http://localhost:8080/login')
        .then(res=>res.json())
        .then((users) => {
            console.log(users); 
            dispatch({
            type: GET_USER_DATA,
            result: users
        })
    })
}