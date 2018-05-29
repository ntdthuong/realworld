import { put } from 'redux-saga/effects';
import { tagsSuccessAction, tagsFailedAction } from '../actions';
import { Api } from '../helpers/Api';

export function* fetchTags() {
  try {
    const tags = yield Api.getTagsFromApi();
    yield put(tagsSuccessAction(tags));
  } catch (error) {
    yield put(tagsFailedAction(error));
  }
}
