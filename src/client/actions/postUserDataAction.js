import {POST_USER_DATA} from './types';

export const postUserData = (newUser) => dispatch => {
    console.log('postnjknkj');
    fetch('http://localhost:3300/users', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(user => dispatch({
        type: POST_USER_DATA,
        result: user
    }))
}