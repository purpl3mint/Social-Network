import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={"textarea"} name={"newPostBody"} placeholder={"Enter your post"} />
      <button>Add post</button>
    </form>
  )
}

const AddPostReduxForm = reduxForm({ form: 'profileAddPostForm' })(AddPostForm);

const MyPosts = (props) => {

  let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  let addNewPost = (values) => {
    props.addNewPost(values.newPostBody);
  }

  return (
    <div className={style.postsBlock}>
      <h2>My posts</h2>
      <AddPostReduxForm onSubmit={addNewPost} />
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;