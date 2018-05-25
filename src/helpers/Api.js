import axios from 'axios';
import { history } from '../helpers/history';

const url = 'https://conduit.productionready.io/api/';
const url_dfArticles = 'articles/';
const url_articles = 'articles/?limit=10&offset=';
const url_getUSer = 'user/';
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
      url: `${url}${url_getUSer}`,
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

function* getTagsFromApi() {
  const tags = yield axios.get(`${url}${url_tags}`)
      .then(res => {
        return res.data.tags;
      })
  return tags;
}

function* postArticleToApi(article, token) {
  const recievedArticle = yield axios({
        method: 'post',
        url: `${url}${url_dfArticles}`,
        data: article,
        headers: {authorization: `Token ${token}`}
      })
      .then(res => {
        console.log(res.data)
        return res.data.article;
      })
  return recievedArticle;
}

export const Api = {
  getArticlesFromApi,
  postArticleToApi,
  getTagsFromApi,
  getUserfromApi,
  postUserToApi,
  matchUserToApi,
  getProfileFromApi
}