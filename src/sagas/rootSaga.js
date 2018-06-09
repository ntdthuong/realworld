import { call, all } from 'redux-saga/effects';
import {
  watchFetchArticles,
  watchFetchArticle,
  watchEditorArticle,
  watchFetchFeedByUser,
  watchFavoriteArticle,
  watchDelArticle
} from './articlesSaga';
import { fetchTags, watchFetchArticlesByTag } from './tagsSaga';
import { watchSignUpUser, watchSignOutUser } from './signUpSaga';
import { watchSignInUser, getUser, watchGetUser } from './signInSaga';
import {
  watchFetchProfile,
  watchEditProfile,
  watchFetchArticlesByUser,
  watchFetchFavoritedArticles
} from './profileSaga';
import { watchGetComments, watchPostComment, watchDelComment } from './commentsSaga';
import { watchToggleFollow } from './followSaga';

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
    call(watchFetchFeedByUser),
    call(watchSignOutUser),
    call(watchFavoriteArticle),
    call(watchFetchArticlesByUser),
    call(watchGetComments),
    call(watchPostComment),
    call(watchDelComment),
    call(watchFetchFavoritedArticles),
    call(watchToggleFollow),
    call(watchDelArticle)
  ])
}