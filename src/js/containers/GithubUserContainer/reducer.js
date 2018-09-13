import { FETCH_GITHUB_USER } from './constants';

const initialState = {
  user: '',
};

const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default githubReducer;
