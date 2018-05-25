import { put, takeLatest } from 'redux-saga/effects';
import { addArticleSuccessAction, fetchFailedAction } from '../actions';
import {
  ADD_ARTICLE
} from '../actions/actionTypes';
import { Api } from '../helpers/Api';

export function* addArticle(article) {
  try {
    console.log('run addArticle');
    const token = yield localStorage.getItem('jwt');
    console.log('token', token)
    const receivedArticle = yield Api.postArticleToApi(article, token);
    console.log('receivedArticle', receivedArticle)
    // yield put(signUpSuccessAction(recievedUser));
  } catch (error) {
    yield put(fetchFailedAction(error.response.data));
  }
}

export function* watchAddArticle() {
  yield takeLatest(ADD_ARTICLE, addArticle)
}