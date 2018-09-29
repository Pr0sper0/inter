import { combineReducers } from 'redux';
import InterviewerReducer from './reducer_interviewer';

const rootReducer = combineReducers({
  interviewers: InterviewerReducer
});

export default rootReducer;