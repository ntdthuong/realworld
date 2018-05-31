import {
  FETCH_ARTICLE_SUCCEEDED,
  FETCH_ARTICLE_FAILED,
  EDITOR_ARTICLE_SUCCEEDED,
  EDITOR_ARTICLE_FAILED
} from '../actions/actionTypes';

export function articleReducer(state = {} , action) {
  switch(action.type) {
    case FETCH_ARTICLE_SUCCEEDED:
      return action.receivedArticle;
    case EDITOR_ARTICLE_SUCCEEDED:
      console.log('post', action.receivedArticle)
      return action.receivedArticle;
    case FETCH_ARTICLE_FAILED:
      return action.error;
    case EDITOR_ARTICLE_FAILED:
      return action.error;
    default :
      return state;
  }
}