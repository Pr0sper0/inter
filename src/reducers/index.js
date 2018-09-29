import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  interviewers: InterviewerReducer
});

export default rootReducer;