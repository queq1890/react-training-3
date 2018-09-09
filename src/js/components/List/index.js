import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';

const mapStateToProps = state => ({ articles: state.articles });

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <Article className="list-group-item" key={el.id}>
        {el.title}
      </Article>
    ))}
  </ul>
);

const Article = styled.li`
  list-style: none;
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
`

const List = connect(mapStateToProps)(ConnectedList);

export default List;
