import React from 'react';
import ListContainer from 'containers/ListContainer';
import FormContainer from 'containers/FormContainer';
import MainContainer from './MainContainer';

const App = () => (
  <MainContainer>
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <ListContainer />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <FormContainer />
    </div>
  </MainContainer>
);

export default App;
