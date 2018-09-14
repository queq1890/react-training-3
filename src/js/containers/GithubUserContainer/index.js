import { connect } from 'react-redux';
import GithubUser from 'components/GithubUser';
import { fetchGithubUser } from './actions';

const mapStateToProps = state => ({
  user: state.githubReducer.user,
  profile: state.githubReducer.profile,
  err: state.githubReducer.err,
});

const mapDispatchToProps = dispatch => ({
  fetchGithubUser: () => dispatch(fetchGithubUser()),
});

const GithubUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubUser);

export default GithubUserContainer;
