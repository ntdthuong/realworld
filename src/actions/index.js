import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCEEDED,
  FETCH_ARTICLES_FAILED,
  FETCH_PAGING,

  FETCH_ARTICLE,
  FETCH_ARTICLE_SUCCEEDED,
  FETCH_ARTICLE_FAILED,

  EDITOR_ARTICLE,
  EDITOR_ARTICLE_SUCCEEDED,
  EDITOR_ARTICLE_FAILED,

  FETCH_SUCCEEDED,
  FETCH_FAILED,

  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  FETCH_USER_FAILED,

  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILED,

  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,

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
