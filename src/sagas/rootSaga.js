import { call, all } from 'redux-saga/effects';
import {
  watchFetchArticles,
  watchFetchArticle,
  watchEditorArticle,
  watchFetchArticlesByUser,
  watchFavoriteArticle
} from './articlesSaga';
import { fetchTags, watchFetchArticlesByTag } from './tagsSaga';
import { watchSignUpUser, watchSignOutUser } from './signUpSaga';
import { watchSignInUser, getUser, watchGetUser } from './signInSaga';
import { watchFetchProfile, watchEditProfile } from './profileSaga';

export default function* rootSaga() {
  yield all([
    call(getUser),
    call(watchGetUser),
    call(watchFetchArticles),
    call(watchSignUpUser),
    call(watchSignInUser),
    call(watchFetchProfile),
    call(fetchTags),
    call(watchEditProfile),
    call(watchFetchArticle),
    call(watchEditorArticle),
    call(watchFetchArticlesByTag),
    call(watchFetchArticlesByUser),
    call(watchSignOutUser),
    call(watchFavoriteArticle)
  ])
}