import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validatiors/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

let maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={"newPostBody"}
        placeholder={"Enter your post"}
        validate={[required, maxLength10]} />
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