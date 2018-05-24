import { put, takeLatest } from 'redux-saga/effects';

import { profileSuccessAction, fetchFailedAction } from '../actions';
import { FETCH_PROFILE } from '../actions/actionTypes';
import { Api } from '../helpers/Api';

export function* fetchProfile(action) {
  try {
    const profile = yield Api.getProfileFromApi(action.username);
    // console.log('pro5', profile)
    yield put(profileSuccessAction(profile));
  } catch (error) {
    yield put(fetchFailedAction(error));
  }
}

export function* watchFetchProfile() {
  yield takeLatest(FETCH_PROFILE, fetchProfile)
}