import {
  FETCH_GITHUB_USER_SUCCESS,
  FETCH_GITHUB_USER_FAILED,
  FETCH_GITHUB_USER,
} from './constants';

const initialState = {
  user: '',
  profile: {},
  err: false,
  loading: false,
};

const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_USER:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GITHUB_USER_SUCCESS:
      return {
        ...state,
        profile: action.receivedUser,
        loading: false,
      };
    case FETCH_GITHUB_USER_FAILED:
      return {
        ...state,
        profile: {},
        err: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
