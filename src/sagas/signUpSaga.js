import { put, takeLatest } from 'redux-saga/effects';
import { signUpSuccessAction, userFailedAction } from '../actions';
import {
  SIGN_UP
} from '../actions/actionTypes';
import { Api } from '../helpers/Api';

export function* signUpUser(user) {
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