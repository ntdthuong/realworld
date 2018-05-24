import { call, all } from 'redux-saga/effects';
import { fetchArticles, watchFetchArticles } from './articlesSaga';
import { watchSignUpUser } from './signUpSaga';
import { watchSignInUser, getUser } from './signInSaga';
import { watchFetchProfile } from './profileSaga';
import { fetchTags } from './tagsSaga';

export default function* rootSaga() {
  yield all([
    call(getUser),
    call(fetchArticles),
    watchFetchArticles(),
    watchSignUpUser(),
    watchSignInUser(),
    watchFetchProfile(),
    fetchTags()
  ])
}