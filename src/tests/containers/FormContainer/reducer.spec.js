import formReducer from 'containers/FormContainer/reducer';
import { ADD_ARTICLE } from 'containers/FormContainer/constants';

describe('formReducer', () => {
  it('should return the initial state', () => {
    expect(formReducer(undefined, {})).toEqual([
      {
        articles: [],
      },
    ]);
  });
});
