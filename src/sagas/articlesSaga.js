import { put, takeLatest } from 'redux-saga/effects';
import {
  fetchPagingAction,
  fetchArticlesSuccessAction,
  fetchArticlesFailedAction,
  fetchArticleSuccessAction,
  fetchArticleFailedAction,
  editorArticleSuccessAction,
  editorArticleFailedAction,
  fetchArticlesByUserSuccessAction
} from '../actions';
import {
  FETCH_PAGING,
  EDITOR_ARTICLE,
  FETCH_ARTICLE,
  FETCH_ARTICLES_BY_USER
} from '../actions/actionTypes';
import { Api } from '../helpers/Api';

function* fetchArticles(action) {
  try {
    const articles = action ? yield Api.getArticlesFromApi(action.page) : yield Api.getArticlesFromApi();
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

function* fetchArticlesByUser(action) {
  try {
    const token = localStorage.getItem('jwt');
    const articleRecieved = yield Api.getArticlesByUser(token, action.page);
    yield put(fetchArticlesByUserSuccessAction(articleRecieved));
  } catch (error) {
    yield put(fetchArticlesFailedAction(error.response.data));
  }
}

export function* watchFetchArticlesByUser() {
  yield takeLatest(FETCH_ARTICLES_BY_USER, fetchArticlesByUser)
}