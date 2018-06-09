import {
  // FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCEEDED,
  FETCH_ARTICLES_FAILED,
  FETCH_PAGING,

  FETCH_ARTICLES_BY_TAG,
  FETCH_ARTICLES_BY_TAG_SUCCEEDED,
  FETCH_FEED_BY_USER,
  FETCH_FEED_BY_USER_SUCCEEDED,

  FETCH_ARTICLES_BY_USER,
  FETCH_ARTICLES_BY_USER_SUCCEEDED,
  FETCH_ARTICLES_BY_USER_FAILED,

  FETCH_FAVORITED_ARTICLES,
  FETCH_FAVORITED_ARTICLES_SUCCEEDED,
  FETCH_FAVORITED_ARTICLES_FAILED,

  FAVORITE_ARTICLE,
  FAVORITE_ARTICLE_SUCCEEDED,
  FAVORITE_ARTICLE_FAILED,

  FETCH_ARTICLE,
  FETCH_ARTICLE_SUCCEEDED,
  FETCH_ARTICLE_FAILED,

  EDITOR_ARTICLE,
  EDITOR_ARTICLE_SUCCEEDED,
  EDITOR_ARTICLE_FAILED,

  DEL_ARTICLE,
  DEL_ARTICLE_SUCCEEDED,
  DEL_ARTICLE_FAILED,

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

  TOGGLE_FOLLOW,
  TOGGLE_FOLLOW_SUCCESS,
  TOGGLE_FOLLOW_FAILED,

  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCEEDED,
  FETCH_COMMENTS_FAILED,

  POST_COMMENT,
  POST_COMMENT_SUCCEEDED,
  POST_COMMENT_FAILED,

  DEL_COMMENT,
  DEL_COMMENT_SUCCEEDED,
  DEL_COMMENT_FAILED,

  FETCH_TAGS_SUCCEEDED,
  FETCH_TAGS_FAILED,
} from './actionTypes';

// ARTICLES
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

// FAVORITE
export const favoriteAction = (favorited, slug, index) => {
  return {
    type: FAVORITE_ARTICLE,
    favorited,
    slug,
    index
  }
}
export const favoriteSuccessAction = (receivedArticle, index) => {
  return {
    type: FAVORITE_ARTICLE_SUCCEEDED,
    receivedArticle,
    index
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

export const delArticleAction = (slug) => {
  return {
    type: DEL_ARTICLE,
    slug
  }
}
export const delArticleSuccessAction = (receivedArticle) => {
  return {
    type: DEL_ARTICLE_SUCCEEDED,
    receivedArticle
  }
}
export const delArticleFailedAction = (error) => {
  return {
    type: DEL_ARTICLE_FAILED,
    error
  }
}

// USER
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

// PROFILE
export const profileAction = (username, token) => {
  return {
    type: FETCH_PROFILE,
    username,
    token
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

// FOLLOW
export const followAction = (username, follow) => {
  return {
    type: TOGGLE_FOLLOW,
    username,
    follow
  }
}
export const followFailedAction = (error) => {
  return {
    type: TOGGLE_FOLLOW_FAILED,
    error
  }
}
export const followSuccessAction = (receivedProfile) => {
  return {
    type: TOGGLE_FOLLOW_SUCCESS,
    receivedProfile
  }
}

// ARTICLES
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

export const fetchArticlesByUserAction = (username, page) => {
  return {
    type: FETCH_ARTICLES_BY_USER,
    username,
    page
  }
}
export const myArticlesSuccessAction = (receivedArticles) => {
  return {
    type: FETCH_ARTICLES_BY_USER_SUCCEEDED,
    receivedArticles
  }
}
export const myArticlesFailedAction = (error) => {
  return {
    type: FETCH_ARTICLES_BY_USER_FAILED,
    error
  }
}

export const fetchFavoritedArticlesAction = (username, page) => {
  return {
    type: FETCH_FAVORITED_ARTICLES,
    username,
    page
  }
}
export const favoritedArticlesSuccessAction = (receivedArticles) => {
  return {
    type: FETCH_FAVORITED_ARTICLES_SUCCEEDED,
    receivedArticles
  }
}
export const favoritedArticlesFailedAction = (error) => {
  return {
    type: FETCH_FAVORITED_ARTICLES_FAILED,
    error
  }
}

// TAGS
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

// COMMENTS
export const fetchCommentsAction = (id) => {
  return {
    type: FETCH_COMMENTS,
    id
  }
}
export const fetchCommentsSuccessAction = (receivedCmts) => {
  return {
    type: FETCH_COMMENTS_SUCCEEDED,
    receivedCmts
  }
}
export const fetchCommentsFailedAction = (error) => {
  return {
    type: FETCH_COMMENTS_FAILED,
    error
  }
}
export const postCommentAction = (id, comment) => {
  return {
    type: POST_COMMENT,
    id,
    comment
  }
}
export const postCommentSuccessAction = (receivedCmt) => {
  return {
    type: POST_COMMENT_SUCCEEDED,
    receivedCmt
  }
}
export const postCommentFailedAction = (error) => {
  return {
    type: POST_COMMENT_FAILED,
    error
  }
}

export const delCommentAction = (slug, id) => {
  return {
    type: DEL_COMMENT,
    slug,
    id
  }
}
export const delCommentSuccessAction = (id) => {
  return {
    type: DEL_COMMENT_SUCCEEDED,
    id
  }
}
export const delCommentFailedAction = (error) => {
  return {
    type: DEL_COMMENT_FAILED,
    error
  }
}