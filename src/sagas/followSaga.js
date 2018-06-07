import { put, takeLatest } from 'redux-saga/effects';
import { followSuccessAction, followFailedAction } from '../actions';
import {
  TOGGLE_FOLLOW
} from '../actions/actionTypes';
import { Api } from '../helpers/Api';

function* toggleFollow(action) {
  try {
    const token = localStorage.getItem('jwt');
    const profile = yield Api.toggleFollow(action.username, action.follow, token);
    yield put(followSuccessAction(profile));
  } catch (error) {
    yield put(followFailedAction(error.response.data));
  }
}

export function* watchToggleFollow() {
  yield takeLatest(TOGGLE_FOLLOW, toggleFollow)
}