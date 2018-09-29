import { combineReducers } from 'redux';
import InterviewerReducer from './reducer_interviewers';

const rootReducer = combineReducers({
  interviewers: InterviewerReducer
});

export default rootReducer;