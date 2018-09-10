import React from 'react';
import Article from './style';

const List = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <Article className="list-group-item" key={el.id}>
        {el.title}
      </Article>
    ))}
  </ul>
);

export default List;
