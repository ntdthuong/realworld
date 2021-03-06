import {
  FETCH_ARTICLES_SUCCEEDED,
  FETCH_ARTICLES_FAILED,
  FETCH_ARTICLES_BY_TAG_SUCCEEDED,
  FETCH_FEED_BY_USER_SUCCEEDED,
  FAVORITE_ARTICLE_SUCCEEDED,
  FETCH_ARTICLES_BY_USER_SUCCEEDED,
  FETCH_FAVORITED_ARTICLES_SUCCEEDED
} from '../actions/actionTypes';

export function articlesReducer(state = {} , action) {
  switch(action.type) {
    case FETCH_ARTICLES_SUCCEEDED:
      return {...action.receivedArticles, pageNow: 'global'};
    case FETCH_FEED_BY_USER_SUCCEEDED:
      return {...action.receivedArticles, pageNow: 'feed'};
    case FETCH_ARTICLES_BY_TAG_SUCCEEDED:
      const articles = {...action.articles.receivedArticles, tag: action.articles.tag, pageNow: 'tag'};
      return articles;
    case FETCH_ARTICLES_BY_USER_SUCCEEDED:
      return {...action.receivedArticles, pageNow: 'myArticles'};
    case FAVORITE_ARTICLE_SUCCEEDED:
      const { receivedArticle, index } = action;
      let newArticle = state.articles[index]=receivedArticle;
      if(state.pageNow === 'favoritedArticles') {
        const filter =  [...state.articles].filter((cmt, i) => i !== index);
        return {articles: filter, pageNow: 'favoritedArticles'}
      } else {
        return {...state, newArticle};
      }
    case FETCH_FAVORITED_ARTICLES_SUCCEEDED:
      return {...action.receivedArticles, pageNow: 'favoritedArticles'};
    case FETCH_ARTICLES_FAILED:
      return [];
    default :
      return state;
  }
}