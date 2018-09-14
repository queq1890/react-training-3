import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class GithubUser extends PureComponent {
  getProfile = () => {
    const { fetchGithubUser } = this.props;
    fetchGithubUser();
  };

  render() {
    const { profile, err } = this.props;
    console.log('from render profile', profile);
    console.log('from render error', err);
    return (
      <div>
        <button type="submit" onClick={this.getProfile}>
          get profile
        </button>
      </div>
    );
  }
}

GithubUser.propTypes = {
  fetchGithubUser: PropTypes.func,
  profile: PropTypes.arrayOf(Object),
  err: PropTypes.bool,
};

export default GithubUser;
