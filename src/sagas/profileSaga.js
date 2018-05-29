import { put, takeLatest } from 'redux-saga/effects';

import { profileSuccessAction, profileFailedAction, editProfileSuccessAction, editProfileFailedAction } from '../actions';
import { FETCH_PROFILE, EDIT_PROFILE } from '../actions/actionTypes';
import { Api } from '../helpers/Api';

export function* fetchProfile(action) {
  try {
    const profile = yield Api.getProfileFromApi(action.username);
    yield put(profileSuccessAction(profile));
  } catch (error) {
    yield put(profileFailedAction(error.response.data));
  }
}

export function* watchFetchProfile() {
  yield takeLatest(FETCH_PROFILE, fetchProfile)
}

export function* editProfile(action) {
  try {
    const token = localStorage.getItem('jwt');
    const profile = yield Api.editProfileToApi(token, action.userInfo);
    yield put(editProfileSuccessAction(profile));
  } catch (error) {
    yield put(editProfileFailedAction(error.response.data));
  }
}

export function* watchEditProfile() {
  yield takeLatest(EDIT_PROFILE, editProfile)
}