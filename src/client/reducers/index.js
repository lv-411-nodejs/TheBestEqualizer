import {combineReducers} from 'redux';
import postUserDataReducer from './postUserDataReducer';
import getUserDataReducer from './getUserDataReducer';

export default combineReducers({
    postUser: postUserDataReducer,
    getUser: getUserDataReducer
});
