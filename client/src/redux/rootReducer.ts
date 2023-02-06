import { combineReducers } from 'redux';
import blogsReducer from './reducer/blogs';

const rootReducer = combineReducers({ blogsReducer });

export default rootReducer;
