import { put, takeLatest } from 'redux-saga/effects';
import { signInSuccessAction, fetchFailedAction } from '../actions';
import {
  SIGN_IN
} from '../actions/actionTypes';
import { Api } from './Api';

export function* getUser() {
  try {
    const recievedUser = yield Api.getUserfromApi(localStorage.getItem('jwt'));
    yield put(signInSuccessAction(recievedUser));
  } catch (error) {
    yield put(fetchFailedAction(error.response.data));
  }
}

export function* signInUser(user) {
  try {
    const userInfo = yield Api.matchUserToApi(user.user);
    yield localStorage.setItem('jwt', userInfo.token);
    yield put(signInSuccessAction(userInfo));
  } catch (error) {
    yield put(fetchFailedAction(error.response.data));
  }
}

export function* watchSignInUser() {
  yield takeLatest(SIGN_IN, signInUser)
}