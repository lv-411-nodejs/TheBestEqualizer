import {POST_USER_DATA} from '../actions/types';

const initialState = {
    user: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case POST_USER_DATA:
            return {
                ...state,
                user: action.result
            }
        default:
            return state;
    }
}