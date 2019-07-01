import { combineReducers } from 'redux';
import postUserDataReducer from './postUserDataReducer';
import audioReducer from './audioReducer';

export default combineReducers({
  authStatus: postUserDataReducer,
  audioData: audioReducer
});
