import { put, takeLatest } from 'redux-saga/effects';
import {
  fetchPagingAction,
  fetchArticlesSuccessAction,
  fetchArticlesFailedAction,
  fetchArticleSuccessAction,
  fetchArticleFailedAction,
  editorArticleSuccessAction,
  editorArticleFailedAction
} from '../actions';
import {
  FETCH_PAGING,
  ADD_ARTICLE,
  FETCH_ARTICLE
} from '../actions/actionTypes';
import { Api } from '../helpers/Api';

export function* fetchArticles(action) {
  try {
    const articles = action ? yield Api.getArticlesFromApi(action.page*10) : yield Api.getArticlesFromApi();
    yield put(fetchArticlesSuccessAction(articles));
  } catch (error) {
    yield put(fetchArticlesFailedAction(error));
  }
}

export function* watchFetchArticles() {
  yield takeLatest(FETCH_PAGING, fetchArticles)
}

export function* fetchArticle(action) {
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

export function* editorArticle(action) {
  try {
    const token = yield localStorage.getItem('jwt');
    const article = yield Api.postArticleToApi(token, action.article);
    yield put(editorArticleSuccessAction(article));
    yield put(fetchPagingAction());
  } catch (error) {
    yield put(editorArticleFailedAction(error.response.data));
  }
}

export function* watchEditorArticle() {
  yield takeLatest(ADD_ARTICLE, editorArticle)
}
