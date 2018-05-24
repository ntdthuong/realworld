import { put, takeLatest } from 'redux-saga/effects';
import { tagsSuccessAction, fetchFailedAction } from '../actions';
import { Api } from '../helpers/Api';

export function* fetchTags() {
  try {
    const tags = yield Api.getTagsFromApi();
    yield put(tagsSuccessAction(tags));
  } catch (error) {
    yield put(fetchFailedAction(error.response.data));
  }
}

