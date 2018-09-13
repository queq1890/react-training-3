import { FETCH_GITHUB_USER } from './constants';

export const fetchGithubUser = user => ({
  type: FETCH_GITHUB_USER,
  payload: user,
});
