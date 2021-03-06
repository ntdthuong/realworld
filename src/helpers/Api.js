import axios from 'axios';
import { history } from '../helpers/history';

const url = 'https://conduit.productionready.io/api/';
const url_dfArticles = 'articles/';
const url_articles = 'articles/?limit=10&offset=';
const url_user = 'user/';
const url_signUp = 'users/';
const url_signIn = 'users/login';
const url_profile = 'profiles/';
const url_tags = 'tags/';

// USER
function* postUserToApi(user) {
  const userInfo = yield axios.post(`${url}${url_signUp}`, user)
  .then(res => {
    history.push('/');
    return res.data.user;
  })
  return userInfo;
}

function* matchUserToApi(user) {
  const userInfo = yield axios.post(`${url}${url_signIn}`, user)
  .then(res => {
    history.push('/');
    return res.data.user;
  })
  return userInfo;
}

function* getUserfromApi(token) {
  const userInfo = yield axios({
    method: 'get',
    url: `${url}${url_user}`,
    headers: {authorization: `Token ${token}`}
  })
  .then(res => {
    return res.data.user;
  })
  return userInfo;
}

// PROFILE
function* getProfileFromApi(username, token) {
  const profile = yield axios({
      method: 'get',
      url: `${url}${url_profile}${username}`,
      headers: token ? {authorization: `Token ${token}`} : ''
    })
    .then(res => {
      return res.data.profile;
    })
  return profile;
}

function* editProfileToApi(token, userInfo) {
  const newInfo = yield axios({
    method: 'put',
    url: `${url}${url_user}`,
    data: userInfo,
    headers: {authorization: `Token ${token}`}
  })
  .then(res => {
    history.push('/');
    return res.data;
  })
  return newInfo;
}

// TAGS
function* getTagsFromApi() {
  const tags = yield axios.get(`${url}${url_tags}`)
  .then(res => {
    return res.data.tags;
  })
  return tags;
}

// ARTICLE
function* getArticlesByTag(token, tag, params) {
  const sub = params ? `${params}` : '0';
  const articles = yield axios({
    method: 'get',
    url: `${url}articles?tag=${tag}&limit=10&offset=${sub}`,
    headers: token ? {authorization: `Token ${token}`} : ''
  })
  .then(res => {
    return res.data;
  })
  return articles;
}

function* getArticlesFromApi(token, params) {
  const sub = params ? `${params}` : '0';
  const articles = yield axios({
      method: 'get',
      url: `${url}${url_articles}${sub}`,
      headers: token ? {authorization: `Token ${token}`} : ''
    })
    .then(res => {
      return res.data;
    })
  return articles;
}

function* getFeedByUser(token, params) {
  const sub = params ? `${params}` : '0';
  const articles = yield axios({
    method: 'get',
    url: `${url}${url_dfArticles}feed?limit=10&offset=${sub}`,
    headers: {authorization: `Token ${token}`}
  })
  .then(res => {
    history.push('/');
    return res.data;
  })
  return articles;
}

function* getArticlesByUser(username, token, params) {
  const sub = params ? `${params}` : '0';
  const articles = yield axios({
      method: 'get',
      url: `${url}articles?author=${username}&limit=5&offset=${sub}`,
      headers: {authorization: `Token ${token}`}
    })
    .then(res => {
      return res.data;
    })
  return articles;
}

function* getArticleFromApi(id) {
  const articles = yield axios.get(`${url}${url_dfArticles}${id}`)
      .then(res => {
        return res.data;
      })
  return articles;
}

function* postArticleToApi(token, article) {
  const recievedArticle = yield axios({
        method: 'post',
        url: `${url}${url_dfArticles}`,
        data: article,
        headers: {authorization: `Token ${token}`}
      })
      .then(res => {
        history.push(`/article/${res.data.article.slug}`);
        return res.data.article;
      })
  return recievedArticle;
}

function* putArticleToApi(token, article, id) {
  const recievedArticle = yield axios({
        method: 'put',
        url: `${url}${url_dfArticles}${id}`,
        data: article,
        headers: {authorization: `Token ${token}`}
      })
      .then(res => {
        history.push(`/article/${res.data.article.slug}`);
        return res.data.article;
      })
  return recievedArticle;
}

function* delArticleFromApi(token, slug) {
  const recievedArticle = yield axios({
        method: 'delete',
        url: `${url}${url_dfArticles}${slug}`,
        headers: {authorization: `Token ${token}`}
      })
      .then(res => {
        history.push('/');
        console.log('del', res.data.article)
        return res.data.article;
      })
  return recievedArticle;
}


function* favoriteApi(favorited, slug, token) {
  const method = favorited ? 'delete' : 'post';
  const userInfo = yield axios({
      method: method,
      url: `${url}${url_dfArticles}${slug}/favorite`,
      headers: {authorization: `Token ${token}`}
    })
    .then(res => {
      return res.data.article;
    })
  return userInfo;
}

function* getFavoriteApi(id, token, params) {
  const sub = params ? `${params}` : '0';
  const articles = yield axios({
      method: 'get',
      url: `${url}articles?favorited=${id}&limit=5&offset=${sub}`,
      headers: token ? {authorization: `Token ${token}`} : ''
    })
    .then(res => {
      return res.data;
    })
  return articles;
}

// COMMENT
function* getCommentsFromApi(id, token) {
  const cmt = yield axios({
      method: 'get',
      url: `${url}${url_dfArticles}${id}/comments`,
      headers: token ? {authorization: `Token ${token}`} : ''
    })
    .then(res => {
      return res.data.comments;
    })
  return cmt;
}

function* postCommentToApi(id, token, comment) {
  const cmt = yield axios({
      method: 'post',
      url: `${url}${url_dfArticles}${id}/comments`,
      data: comment,
      headers: token ? {authorization: `Token ${token}`} : ''
    })
    .then(res => {
      return res.data.comment;
    })
  return cmt;
}

function* delCommentFromApi(slug, token, id) {
  const cmt = yield axios({
      method: 'delete',
      url: `${url}${url_dfArticles}${slug}/comments/${id}`,
      headers: token ? {authorization: `Token ${token}`} : ''
    })
    .then(res => {
      return res.data;
    })
  return cmt;
}

// FOLLOW
function* toggleFollow(username, follow, token) {
  const method = follow ? 'delete' : 'post';
  const profile = yield axios({
    method: method,
    url: `${url}${url_profile}${username}/follow`,
    headers: {authorization: `Token ${token}`}
  })
  .then(res => {
    return res.data.profile;
  })
  return profile;
}

export const Api = {
  getArticlesFromApi,
  getArticleFromApi,
  postArticleToApi,
  putArticleToApi,
  getTagsFromApi,
  getArticlesByTag,
  getFeedByUser,
  getUserfromApi,
  postUserToApi,
  matchUserToApi,
  getProfileFromApi,
  editProfileToApi,
  favoriteApi,
  getArticlesByUser,
  getCommentsFromApi,
  postCommentToApi,
  delCommentFromApi,
  getFavoriteApi,
  toggleFollow,
  delArticleFromApi
}