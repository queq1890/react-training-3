import SET_LOCALE from './constants';

const initialState = {
  locale: 'en',
};

const localeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return { ...state, locale: state.locale };
    default:
      return state;
  }
};

export default localeReducer;
