import { put, takeLatest } from 'redux-saga/effects';

import { history } from '../helpers/history';
import { signUpSuccessAction, userFailedAction } from '../actions';
import {
  SIGN_UP,
  SIGN_OUT
} from '../actions/actionTypes';
import { Api } from '../helpers/Api';

function* signUpUser(user) {
  try {
    const userInfo = yield Api.postUserToApi(user.user);
    yield localStorage.setItem('jwt', userInfo.token);
    const recievedUser = yield Api.getUserfromApi(localStorage.getItem('jwt'));
    yield put(signUpSuccessAction(recievedUser));
  } catch (error) {
    yield put(userFailedAction(error.response.data));
  }
}

export function* watchSignUpUser() {
  yield takeLatest(SIGN_UP, signUpUser)
}

function* signOutUser() {
  try {
    yield localStorage.removeItem('jwt');
    yield Api.getUserfromApi(localStorage.getItem('jwt'));
  } catch (error) {
    yield put(userFailedAction(error.response.data));
    history.push('/');
  }
}

export function* watchSignOutUser() {
  yield takeLatest(SIGN_OUT, signOutUser)
}