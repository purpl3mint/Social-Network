import React from 'react';
import { withRouter } from 'react-router-dom';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithURLDataContainerComponent);