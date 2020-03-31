import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer.js';
import MyPosts from './MyPosts';
import StoreContext from '../../../storeContext.js';

const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState();

        let addNewPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          store.dispatch(updateNewPostActionCreator(text));
        }

        return (

          <MyPosts
            updateNewPostText={onPostChange}
            addNewPost={addNewPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
          />)
      }
    }</StoreContext.Consumer>
  );
}

export default MyPostsContainer;