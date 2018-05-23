import { put, takeLatest } from 'redux-saga/effects';
import { fetchSuccessAction, fetchFailedAction } from '../actions';
import {
  FETCH_PAGING
} from '../actions/actionTypes';
import { Api } from './Api';

export function* fetchArticles(action) {
  try {
    const articles = action ? yield Api.getArticlesFromApi(action.page*10) : yield Api.getArticlesFromApi();
    yield put(fetchSuccessAction(articles));
  } catch (error) {
    yield put(fetchFailedAction(error));
  }
}

export function* watchFetchArticles() {
  yield takeLatest(FETCH_PAGING, fetchArticles)
}