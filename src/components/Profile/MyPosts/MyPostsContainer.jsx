import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer.js';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => { dispatch(updateNewPostActionCreator(text)); },
    addNewPost: () => { dispatch(addPostActionCreator()); }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;