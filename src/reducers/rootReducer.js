import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer';
import { userReducer } from './usersReducer';
// import { tagsReducer } from './usersReducer';

export const rootReducer = combineReducers({
  articles: articlesReducer,
  user: userReducer,
  // tags: tagsReducer
});