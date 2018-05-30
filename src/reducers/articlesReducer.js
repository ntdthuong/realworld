import {
  FETCH_ARTICLES_SUCCEEDED,
  FETCH_ARTICLES_FAILED,
  FETCH_ARTICLES_BY_TAG_SUCCEEDED,
  FETCH_ARTICLES_BY_USER_SUCCEEDED
} from '../actions/actionTypes';

export function articlesReducer(state = {} , action) {
  switch(action.type) {
    case FETCH_ARTICLES_SUCCEEDED:
      return action.receivedArticles;
    case FETCH_ARTICLES_BY_USER_SUCCEEDED:
      return action.receivedArticles;
    case FETCH_ARTICLES_BY_TAG_SUCCEEDED:
      const articles = {...action.articles.receivedArticles, tag: action.articles.tag};
      return articles;
    case FETCH_ARTICLES_FAILED:
      return [];
    default :
      return state;
  }
}