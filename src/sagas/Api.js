import axios from 'axios';
import { history } from '../helpers/history';

const url = 'https://conduit.productionready.io/api/';
const url_articles = 'articles/?limit=10&offset=';
const url_getUSer = 'user';
const url_signUp = 'users/';
const url_signIn = 'users/login';

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


// function* getFilterModeFromApi() {
//   const filterModeData = yield axios.get(`${filterMode}`)
//       .then(res => {
//         return res.data;
//       })
//   return filterModeData;
// }

// function* putTaskToApi(id) {
//   const obj = yield Api.getTasksFromApi(id);
//   yield axios.put(`${url}/${id}`, {
//       ...obj,
//       "isDone": !obj.isDone
//     }).then(res => {
//       console.log('changed');
//     })
// }

// function* removeTaskFromApi(id) {
//   yield axios.delete(`${url}/${id}`)
//   .then(res => {
//     console.log('removed');
//   })
// }

// function* addTaskToApi(newTask) {
//   yield  axios.post(url, newTask)
//     .then(function (response) {
//       console.log('added');
//     })
// }

export const Api = {
  getArticlesFromApi,
  getUserfromApi,
  postUserToApi,
  matchUserToApi
}