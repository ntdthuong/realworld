import { put, takeLatest } from 'redux-saga/effects';

import { profileSuccessAction, profileFailedAction, editProfileSuccessAction, editProfileFailedAction } from '../actions';
import {
  FETCH_PROFILE,
  EDIT_PROFILE,
  FETCH_ARTICLES_BY_USER
} from '../actions/actionTypes';
import { Api } from '../helpers/Api';

function* fetchProfile(action) {
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

function* editProfile(action) {
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

function* fetchArticlesByUser(action) {
  try {
    console.log('fetching')
    // const articles = action ? yield Api.getArticlesFromApi(action.page) : yield Api.getArticlesFromApi();
    // yield put(fetchArticlesSuccessAction(articles));
  } catch (error) {
    // yield put(fetchArticlesFailedAction(error));
  }
}

export function* watchFetchArticlesByUser() {
  yield takeLatest(FETCH_ARTICLES_BY_USER, fetchArticlesByUser)
}