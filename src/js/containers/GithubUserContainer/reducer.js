import {
  FETCH_GITHUB_USER_SUCCESS,
  FETCH_GITHUB_USER_FAILED,
  FETCH_GITHUB_USER,
} from './constants';

const initialState = {
  user: '',
  profile: {},
  err: false,
};

const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_USER:
    case FETCH_GITHUB_USER_SUCCESS:
      return {
        ...state,
        profile: action.receivedUser,
      };
    case FETCH_GITHUB_USER_FAILED:
      return {
        ...state,
        profile: {},
        err: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
