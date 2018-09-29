import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;