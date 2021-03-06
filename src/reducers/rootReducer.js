import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer';
import { articleReducer } from './articleReducer';
import { userReducer } from './usersReducer';
import { profileReducer } from './profileReducer';
import { tagsReducer } from './tagsReducer';
import { commentsReducer } from './commentsReducer';

export const rootReducer = combineReducers({
  articles: articlesReducer,
  user: userReducer,
  profile: profileReducer,
  tags: tagsReducer,
  article: articleReducer,
  comments: commentsReducer
});