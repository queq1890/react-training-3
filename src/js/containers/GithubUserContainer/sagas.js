import {
  call, put, fork, takeLatest, all,
} from 'redux-saga/effects';
import axios from 'axios';
import FETCH_GITHUB_USER from './constants';

const getGithubUser = () => {
  const user = axios.get('https://api.github.com/users/queq1890');
  console.log(user);
  return user;
};

function* fetchGithubUser(action) {}

export default function* githubSaga() {
  yield takeEvery(FETCH_GITHUB_USER, fetchGithubUser);
}
