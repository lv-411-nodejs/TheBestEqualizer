import {combineReducers} from 'redux';
import postUserDataReducer from './postUserDataReducer';
import getUserDataReducer from './getUserDataReducer';
import audioReducer from './audioReducer';

export default combineReducers({
    postUser: postUserDataReducer,
    getUser: getUserDataReducer,
    audioData: audioReducer
});
