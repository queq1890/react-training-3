import React from 'react';
import { connect } from 'react-redux';
import List from 'components/List';

const mapStateToProps = state => ({ articles: state.articles });
const ListContainer = connect(mapStateToProps)(List);

export default ListContainer;
