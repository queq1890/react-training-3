import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';

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

const List = connect(mapStateToProps)(ConnectedList);

export default List;
