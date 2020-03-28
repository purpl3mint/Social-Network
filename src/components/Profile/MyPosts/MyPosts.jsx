import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostText } from '../../../redux/state';


const MyPosts = (props) => {

  let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    props.addPost();
    newPostElement.current.value = '';
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={style.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
        <button onClick={addNewPost}>Add post</button>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;