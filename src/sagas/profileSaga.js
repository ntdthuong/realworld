import { put, takeLatest } from 'redux-saga/effects';

import {
  profileSuccessAction,
  profileFailedAction,
  editProfileSuccessAction,
  editProfileFailedAction,
  myArticlesSuccessAction,
  fetchArticlesFailedAction,
  favoritedArticlesSuccessAction,
  // favoritedArticlesFailedAction
} from '../actions';
import {
  FETCH_PROFILE,
  EDIT_PROFILE,
  FETCH_ARTICLES_BY_USER,
  FETCH_FAVORITED_ARTICLES
} from '../actions/actionTypes';
import { Api } from '../helpers/Api';

function* fetchProfile(action) {
  try {
    const token = localStorage.getItem('jwt');
    const profile = yield Api.getProfileFromApi(action.username, token);
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
    const token = localStorage.getItem('jwt');
    const articles = yield Api.getArticlesByUser(action.username, token, action.page);
    yield put(myArticlesSuccessAction(articles));
  } catch (error) {
    yield put(fetchArticlesFailedAction(error.response.data));
  }
}

export function* watchFetchArticlesByUser() {
  yield takeLatest(FETCH_ARTICLES_BY_USER, fetchArticlesByUser)
}

function* fetchFavoritedArticles(action) {
  try {
    const token = localStorage.getItem('jwt');
    const articles = yield Api.getFavoriteApi(action.username, token, action.page);
    yield put(favoritedArticlesSuccessAction(articles));
  } catch (error) {
    yield put(fetchArticlesFailedAction(error.response.data));
  }
}

export function* watchFetchFavoritedArticles() {
  yield takeLatest(FETCH_FAVORITED_ARTICLES, fetchFavoritedArticles)
}
