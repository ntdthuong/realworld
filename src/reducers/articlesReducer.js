import {
  FETCH_ARTICLES_SUCCEEDED,
  FETCH_ARTICLES_FAILED,
} from '../actions/actionTypes';

export function articlesReducer(state = {} , action) {
  switch(action.type) {
    case FETCH_ARTICLES_SUCCEEDED:
      return action.receivedArticles;
    case FETCH_ARTICLES_FAILED:
      return [];
    default :
      return state;
  }
}