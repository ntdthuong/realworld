import { call, all } from 'redux-saga/effects';
import { fetchArticles, watchFetchArticles } from './articlesSaga';
import { fetchTags } from './tagsSaga';
import { watchSignUpUser } from './signUpSaga';
import { watchSignInUser, getUser } from './signInSaga';
import { watchFetchProfile } from './profileSaga';
import { watchAddArticle } from './addArticle';

export default function* rootSaga() {
  yield all([
    call(getUser),
    call(fetchArticles),
    call(watchFetchArticles),
    call(watchSignUpUser),
    call(watchSignInUser),
    call(watchFetchProfile),
    call(fetchTags),
    call(watchAddArticle)
  ])
}