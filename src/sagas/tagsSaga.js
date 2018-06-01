import { put, takeLatest } from 'redux-saga/effects';

import { FETCH_ARTICLES_BY_TAG } from '../actions/actionTypes';
import { tagsSuccessAction, tagsFailedAction, fetchArticlesByTagSuccessAction, fetchArticlesFailedAction } from '../actions';
import { Api } from '../helpers/Api';

export function* fetchTags() {
  try {
    const tags = yield Api.getTagsFromApi();
    yield put(tagsSuccessAction(tags));
  } catch (error) {
    yield put(tagsFailedAction(error));
  }
}

export function* fetchArticlesByTag(action) {
  try {
    const { tag, page } = action.tagInfo;
    const token = localStorage.getItem('jwt');
    const articles = yield Api.getArticlesByTag(token, tag, page);
    yield put(fetchArticlesByTagSuccessAction(articles, tag));
  } catch (error) {
    yield put(fetchArticlesFailedAction(error));
  }
}

export function* watchFetchArticlesByTag() {
  yield takeLatest(FETCH_ARTICLES_BY_TAG, fetchArticlesByTag)
}