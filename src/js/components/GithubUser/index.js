import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { Img, Btn } from './style';

class GithubUser extends PureComponent {
  getProfile = () => {
    const { fetchGithubUser } = this.props;
    fetchGithubUser();
  };

  render() {
    const { profile, err, loading } = this.props;
    if (loading === true) {
      return <div>読み込み中</div>;
    }

    if (loading === false && !isEmpty(profile)) {
      return (
        <div>
          <Img src={profile.avatar_url} alt="github icon" />
          <Btn type="submit" onClick={this.getProfile}>
            get profile
          </Btn>
        </div>
      );
    }
    return (
      <div>
        <Btn type="submit" onClick={this.getProfile}>
          get profile
        </Btn>
      </div>
    );
  }
}

GithubUser.propTypes = {
  fetchGithubUser: PropTypes.func,
  profile: PropTypes.arrayOf(Object),
  err: PropTypes.bool,
  loading: PropTypes.bool,
};

export default GithubUser;
