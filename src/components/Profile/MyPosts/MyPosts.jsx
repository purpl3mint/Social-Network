import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className={style.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={style.posts}>
        <Post message='How are you?' />
        <Post message='Hi' />
        <Post message='YAY! THIS IS MY FIRST POST!!!' />
      </div>
    </div>
  );
}

export default MyPosts;