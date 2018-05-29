import { call, all } from 'redux-saga/effects';
import { fetchArticles, watchFetchArticles, watchFetchArticle, watchEditorArticle } from './articlesSaga';
import { fetchTags } from './tagsSaga';
import { watchSignUpUser } from './signUpSaga';
import { watchSignInUser, getUser, watchGetUser } from './signInSaga';
import { watchFetchProfile, watchEditProfile } from './profileSaga';

export default function* rootSaga() {
  yield all([
    call(getUser),
    call(watchGetUser),
    call(fetchArticles),
    call(watchFetchArticles),
    call(watchSignUpUser),
    call(watchSignInUser),
    call(watchFetchProfile),
    call(fetchTags),
    call(watchEditProfile),
    call(watchFetchArticle),
    call(watchEditorArticle)
  ])
}