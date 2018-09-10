import React from 'react';
import { FormattedMessage } from 'react-intl';
import ListContainer from 'containers/ListContainer';
import FormContainer from 'containers/FormContainer';
import MainWrapper from './MainWrapper';

const App = () => (
  <MainWrapper>
    <div className="col-md-4 offset-md-1">
      <h2>
        <FormattedMessage id="articles.header" />
      </h2>
      <ListContainer />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>
        <FormattedMessage id="article.new" />
      </h2>
      <FormContainer />
    </div>
  </MainWrapper>
);

export default App;
