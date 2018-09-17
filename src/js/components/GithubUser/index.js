import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

class GithubUser extends PureComponent {
  getProfile = () => {
    const { fetchGithubUser } = this.props;
    fetchGithubUser();
  };

  render() {
    const { profile, err, loading } = this.props;
    console.log('from render error', err);
    console.log('from render profile', profile);
    console.log('loading', loading);
    console.log('isEmpty', isEmpty(profile));
    if (!isEmpty(profile)) {
      return <Img src={profile.avatar_url} alt="github icon" />;
    }
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
  isRequested: PropTypes.bool,
};

export default GithubUser;
