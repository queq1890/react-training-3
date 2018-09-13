import { connect } from 'react-redux';
import GithubUser from 'components/GithubUser';
import { fetchGithubUser } from './actions';

const mapStateToProps = state => ({
  user: state.githubReducer.user,
});

const mapDispatchToProps = dispatch => ({
  fetchGithubUser: user => dispatch(fetchGithubUser(user)),
});

const GithubUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubUser);

export default GithubUserContainer;
