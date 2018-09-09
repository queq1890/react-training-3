import React from 'react';
import List from 'components/List/index';
import Form from 'components/Form/index';
import MainContainer from './MainContainer';

const App = () => (
  <MainContainer>
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
  </MainContainer>
);

export default App;
