import { put, takeLatest } from 'redux-saga/effects';
import {
  fetchPagingAction,
  fetchArticlesSuccessAction,
  fetchArticlesFailedAction,
  // fetchFeedFailedAction,
  fetchArticleSuccessAction,
  fetchArticleFailedAction,
  editorArticleSuccessAction,
  editorArticleFailedAction,
  fetchFeedByUserSuccessAction,
  favoriteSuccessAction,
  favoriteFailedAction
} from '../actions';
import {
  FETCH_PAGING,
  EDITOR_ARTICLE,
  FETCH_ARTICLE,
  FETCH_FEED_BY_USER,
  FAVORITE_ARTICLE
} from '../actions/actionTypes';
import { Api } from '../helpers/Api';

function* fetchArticles(action) {
  try {
    const token = localStorage.getItem('jwt');
    const articles = token ? yield Api.getArticlesFromApi(token, action.page) : yield Api.getArticlesFromApi(undefined, action.page);
    yield put(fetchArticlesSuccessAction(articles));
  } catch (error) {
    yield put(fetchArticlesFailedAction(error));
  }
}

export function* watchFetchArticles() {
  yield takeLatest(FETCH_PAGING, fetchArticles)
}

function* fetchArticle(action) {
  try {
    const articleRecieved = yield Api.getArticleFromApi(action.id);
    yield put(fetchArticleSuccessAction(articleRecieved.article));
  } catch (error) {
    yield put(fetchArticleFailedAction(error));
  }
}

export function* watchFetchArticle() {
  yield takeLatest(FETCH_ARTICLE, fetchArticle)
}

function* editorArticle(action) {
  try {
    const token = yield localStorage.getItem('jwt');
    const { data, id } = action.article;
    const article = id ? yield Api.putArticleToApi(token, data, id) : yield Api.postArticleToApi(token, data);
    yield put(editorArticleSuccessAction(article));
    yield put(fetchPagingAction());
  } catch (error) {
    yield put(editorArticleFailedAction(error.response.data));
  }
}

export function* watchEditorArticle() {
  yield takeLatest(EDITOR_ARTICLE, editorArticle)
}

function* fetchFeedByUser(action) {
  try {
    const token = localStorage.getItem('jwt');
    const articleRecieved = yield Api.getFeedByUser(token, action.page);
    yield put(fetchFeedByUserSuccessAction(articleRecieved));
  } catch (error) {
    yield put(fetchArticlesFailedAction(error.response.data));
  }
}

export function* watchFetchFeedByUser() {
  yield takeLatest(FETCH_FEED_BY_USER, fetchFeedByUser)
}
function* favoriteArticle(action) {
  try {
    const token = localStorage.getItem('jwt');
    const article = yield Api.favoriteApi(action.favorited, action.slug, token);
    yield put(favoriteSuccessAction(article, action.index));
  } catch (error) {
    yield put(favoriteFailedAction(error.response.data));
  }
}

export function* watchFavoriteArticle() {
  yield takeLatest(FAVORITE_ARTICLE, favoriteArticle)
}