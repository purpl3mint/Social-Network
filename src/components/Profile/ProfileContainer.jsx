import React from 'react';
import { withRouter } from 'react-router-dom';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { getUserProfile } from '../../redux/profileReducer';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />;
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithURLDataContainerComponent);