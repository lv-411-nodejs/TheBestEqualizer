import {GET_USER_DATA} from '../actions/types';

const initialState = {
    users: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER_DATA:
            return {
                ...state,
                users: action.result
            }
        default:
            return state;
    }
}