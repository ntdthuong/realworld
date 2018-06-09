import { put, takeLatest } from 'redux-saga/effects';

import {
  fetchCommentsSuccessAction,
  fetchCommentsFailedAction,
  postCommentSuccessAction,
  postCommentFailedAction,
  delCommentSuccessAction,
  delCommentFailedAction
} from '../actions';
import {
  FETCH_COMMENTS,
  POST_COMMENT,
  DEL_COMMENT
} from '../actions/actionTypes';
import { Api } from '../helpers/Api';

function* getComments(action) {
  try {
    const token = localStorage.getItem('jwt');
    const recievedCmts = yield Api.getCommentsFromApi(action.id, token);
    yield put(fetchCommentsSuccessAction(recievedCmts));
  } catch (error) {
    alert('Delete fail');
    yield put(fetchCommentsFailedAction(error.response.data));
  }
}

export function* watchGetComments() {
  yield takeLatest(FETCH_COMMENTS, getComments)
}

function* postComment(action) {
  try {
    const token = localStorage.getItem('jwt');
    const recievedCmt = yield Api.postCommentToApi(action.id, token, action.comment);
    yield put(postCommentSuccessAction(recievedCmt));
  } catch (error) {
    yield put(postCommentFailedAction(error.response.data));
  }
}

export function* watchPostComment() {
  yield takeLatest(POST_COMMENT, postComment)
}

function* delComment(action) {
  try {
    const token = localStorage.getItem('jwt');
    yield Api.delCommentFromApi(action.slug, token, action.id);
    yield put(delCommentSuccessAction(action.id));
  } catch (error) {
    yield put(delCommentFailedAction(error.response.data));
  }
}

export function* watchDelComment() {
  yield takeLatest(DEL_COMMENT, delComment)
}
