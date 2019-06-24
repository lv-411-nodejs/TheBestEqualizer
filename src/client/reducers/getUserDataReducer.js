import {GET_USER_DATA} from '../actions/types';

const initialState = {
    getuser: {}
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER_DATA:
            return {
                ...state,
                getuser: action.result
            };
        default:
            return state;
    }
}