import { put, takeLatest } from 'redux-saga/effects';
import { signInSuccessAction, userFailedAction } from '../actions';
import {
  SIGN_IN,
  EDIT_PROFILE_SUCCESS
} from '../actions/actionTypes';
import { Api } from '../helpers/Api';

export function* getUser() {
  try {
    const recievedUser = yield Api.getUserfromApi(localStorage.getItem('jwt'));
    yield put(signInSuccessAction(recievedUser));
  } catch (error) {
    yield put(userFailedAction(error.response.data));
  }
}

export function* watchGetUser() {
  yield takeLatest(EDIT_PROFILE_SUCCESS, getUser);
}

export function* signInUser(user) {
  try {
    const userInfo = yield Api.matchUserToApi(user.user);
    yield localStorage.setItem('jwt', userInfo.token);
    yield put(signInSuccessAction(userInfo));
  } catch (error) {
    yield put(userFailedAction(error.response.data));
  }
}

export function* watchSignInUser() {
  yield takeLatest(SIGN_IN, signInUser)
}