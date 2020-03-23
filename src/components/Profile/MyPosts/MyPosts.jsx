import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <Post message='How are you?' />
      <Post message='Hi' />
      <Post message='YAY! THIS IS MY FIRST POST!!!' />
    </div>
  );
}

export default MyPosts;