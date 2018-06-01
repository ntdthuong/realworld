import {
  // FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCEEDED,
  FETCH_ARTICLES_FAILED,
  FETCH_PAGING,

  FETCH_ARTICLE,
  FETCH_ARTICLE_SUCCEEDED,
  FETCH_ARTICLE_FAILED,

  FAVORITE_ARTICLE,
  FAVORITE_ARTICLE_SUCCEEDED,
  FAVORITE_ARTICLE_FAILED,

  EDITOR_ARTICLE,
  EDITOR_ARTICLE_SUCCEEDED,
  EDITOR_ARTICLE_FAILED,

  // FETCH_SUCCEEDED,
  // FETCH_FAILED,

  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  FETCH_USER_FAILED,

  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILED,

  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,

  FETCH_ARTICLES_BY_TAG,
  FETCH_ARTICLES_BY_TAG_SUCCEEDED,
  FETCH_FEED_BY_USER,
  FETCH_FEED_BY_USER_SUCCEEDED,
  FETCH_TAGS_SUCCEEDED,
  FETCH_TAGS_FAILED,
} from './actionTypes';

export const fetchArticleAction = (id) => {
  return {
    type: FETCH_ARTICLE,
    id
  }
}
export const fetchArticleSuccessAction = (receivedArticle) => {
  return {
    type: FETCH_ARTICLE_SUCCEEDED,
    receivedArticle
  }
}
export const fetchArticleFailedAction = (error) => {
  return {
    type: FETCH_ARTICLE_FAILED,
    error
  }
}
export const fetchArticlesSuccessAction = (receivedArticles) => {
  return {
    type: FETCH_ARTICLES_SUCCEEDED,
    receivedArticles
  }
}
export const fetchArticlesFailedAction = (error) => {
  return {
    type: FETCH_ARTICLES_FAILED,
    error
  }
}
export const fetchPagingAction = (page) => {
  return {
    type: FETCH_PAGING,
    page
  }
}
export const favoriteAction = (favorited, slug) => {
  return {
    type: FAVORITE_ARTICLE,
    favorited,
    slug
  }
}
export const favoriteSuccessAction = (receivedArticle) => {
  return {
    type: FAVORITE_ARTICLE_SUCCEEDED,
    receivedArticle
  }
}
export const favoriteFailedAction = (receivedArticle) => {
  return {
    type: FAVORITE_ARTICLE_FAILED,
    receivedArticle
  }
}
// export const fetchSuccessAction = (receivedArticles) => {
//   return {
//     type: FETCH_SUCCEEDED,
//     receivedArticles
//   }
// }

// export const fetchFailedAction = (error) => {
//   return {
//     type: FETCH_FAILED,
//     error
//   }
// }
export const editorArticleAction = (data, id) => {
  return {
    type: EDITOR_ARTICLE,
    article: {data, id}
  }
}
export const editorArticleSuccessAction = (receivedArticle) => {
  return {
    type: EDITOR_ARTICLE_SUCCEEDED,
    receivedArticle
  }
}
export const editorArticleFailedAction = (error) => {
  return {
    type: EDITOR_ARTICLE_FAILED,
    error
  }
}

export const signUpAction = (user) => {
  return {
    type: SIGN_UP,
    user
  }
}
export const signInAction = (user) => {
  return {
    type: SIGN_IN,
    user
  }
}
export const signUpSuccessAction = (receivedUser) => {
  return {
    type: SIGN_UP_SUCCESS,
    receivedUser
  }
}
export const signInSuccessAction = (receivedUser) => {
  return {
    type: SIGN_IN_SUCCESS,
    receivedUser
  }
}
export const signOutAction = () => {
  return {
    type: SIGN_OUT
  }
}
export const userFailedAction = (error) => {
  return {
    type: FETCH_USER_FAILED,
    error
  }
}

export const profileAction = (username) => {
  return {
    type: FETCH_PROFILE,
    username
  }
}
export const profileFailedAction = (error) => {
  return {
    type: FETCH_PROFILE_FAILED,
    error
  }
}
export const profileSuccessAction = (receivedProfile) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    receivedProfile
  }
}

export const editProfileAction = (userInfo) => {
  return {
    type: EDIT_PROFILE,
    userInfo
  }
}
export const editProfileSuccessAction = (receivedProfile) => {
  return {
    type: EDIT_PROFILE_SUCCESS,
    receivedProfile
  }
}
export const editProfileFailedAction = (error) => {
  return {
    type: EDIT_PROFILE_FAILED,
    error
  }
}

export const fetchArticleByTagAction = (tag, page) => {
  return {
    type: FETCH_ARTICLES_BY_TAG,
    tagInfo: {tag, page}
  }
}
export const fetchArticlesByTagSuccessAction = (receivedArticles, tag) => {
  return {
    type: FETCH_ARTICLES_BY_TAG_SUCCEEDED,
    articles: {receivedArticles, tag}
  }
}
export const fetchFeedByUserAction = (page) => {
  return {
    type: FETCH_FEED_BY_USER,
    page
  }
}
export const fetchFeedByUserSuccessAction = (receivedArticles, tag) => {
  return {
    type: FETCH_FEED_BY_USER_SUCCEEDED,
    receivedArticles
  }
}
export const tagsSuccessAction = (receivedTags) => {
  return {
    type: FETCH_TAGS_SUCCEEDED,
    receivedTags
  }
}
export const tagsFailedAction = (error) => {
  return {
    type: FETCH_TAGS_FAILED,
    error
  }
}
