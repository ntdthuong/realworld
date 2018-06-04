import {
  FETCH_ARTICLES_SUCCEEDED,
  FETCH_ARTICLES_FAILED,
  FETCH_ARTICLES_BY_TAG_SUCCEEDED,
  FETCH_FEED_BY_USER_SUCCEEDED,
  FAVORITE_ARTICLE_SUCCEEDED,
  FETCH_ARTICLES_BY_USER_SUCCEEDED
} from '../actions/actionTypes';

export function articlesReducer(state = {} , action) {
  switch(action.type) {
    case FETCH_ARTICLES_SUCCEEDED:
      return {...action.receivedArticles, pageNow: 'global', loading: true};
    case FETCH_FEED_BY_USER_SUCCEEDED:
      return {...action.receivedArticles, pageNow: 'feed', loading: true };
    case FETCH_ARTICLES_BY_TAG_SUCCEEDED:
      const articles = {...action.articles.receivedArticles, tag: action.articles.tag, pageNow: 'tag', loading: true};
      return articles;
    case FETCH_ARTICLES_BY_USER_SUCCEEDED:
      return {...action.receivedArticles, pageNow: 'myArticles', loading: true};
    case FAVORITE_ARTICLE_SUCCEEDED:
      const { receivedArticle, index } = action;
      let newArticle = state.articles[index]=receivedArticle;
      return {...state, newArticle};
    case FETCH_ARTICLES_FAILED:
      return [];
    default :
      return state;
  }
}