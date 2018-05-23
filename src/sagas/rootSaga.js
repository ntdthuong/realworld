import { call, all } from 'redux-saga/effects';
import { fetchArticles, watchFetchArticles } from './articlesSaga';
import { watchSignUpUser } from './signUpSaga';
import { watchSignInUser, getUser } from './signInSaga';

export default function* rootSaga() {
  yield all([
    call(getUser),
    call(fetchArticles),
    watchFetchArticles(),
    watchSignUpUser(),
    watchSignInUser()
  ])
}