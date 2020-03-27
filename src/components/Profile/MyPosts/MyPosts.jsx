import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  return (
    <div className={style.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;