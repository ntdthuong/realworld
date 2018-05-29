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

function* getArticlesFromApi(params) {
  const sub = params ? `${params}` : '0';
  const articles = yield axios.get(`${url}${url_articles}${sub}`)
      .then(res => {
        return res.data;
      })
  return articles;
}

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

function* getProfileFromApi(params) {
  const profile = yield axios.get(`${url}${url_profile}${params}`)
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

function* getTagsFromApi() {
  const tags = yield axios.get(`${url}${url_tags}`)
      .then(res => {
        return res.data.tags;
      })
  return tags;
}

function* getArticleFromApi(id) {
  const articles = yield axios.get(`${url}${url_dfArticles}${id}`)
      .then(res => {
        console.log('article', res.data)
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
        console.log(res.data)
        history.push('/');
        return res.data.article;
      })
  return recievedArticle;
}

export const Api = {
  getArticlesFromApi,
  getArticleFromApi,
  postArticleToApi,
  getTagsFromApi,
  getUserfromApi,
  postUserToApi,
  matchUserToApi,
  getProfileFromApi,
  editProfileToApi
}