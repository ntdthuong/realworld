import {
  FETCH_ARTICLE,
  FETCH_PAGING,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_TAGS_SUCCEEDED,
  ADD_ARTICLE,
  ADD_ARTICLE_SUCCEEDED,
  FETCH_SUCCEEDED,
  FETCH_FAILED
} from './actionTypes';

export const fetchArticleAction = () => {
  return {
    type: FETCH_ARTICLE
  }
}

export const fetchPagingAction = (page) => {
  return {
    type: FETCH_PAGING,
    page
  }
}

export const addArticleAction = (article) => {
  return {
    type: ADD_ARTICLE,
    article
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

export const profileAction = (username) => {
  return {
    type: FETCH_PROFILE,
    username
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

export const profileSuccessAction = (receivedProfile) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    receivedProfile
  }
}

export const tagsSuccessAction = (receivedTags) => {
  return {
    type: FETCH_TAGS_SUCCEEDED,
    receivedTags
  }
}

export const addArticleSuccessAction = (receivedArticle) => {
  return {
    type: ADD_ARTICLE_SUCCEEDED,
    receivedArticle
  }
}

export const fetchSuccessAction = (receivedArticles) => {
  return {
    type: FETCH_SUCCEEDED,
    receivedArticles
  }
}

export const fetchFailedAction = (error) => {
  return {
    type: FETCH_FAILED,
    error
  }
}

