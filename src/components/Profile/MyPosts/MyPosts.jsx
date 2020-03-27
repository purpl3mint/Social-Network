import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

  let postsData = [
    { id: 1, message: 'How are you?', likesCount: 5 },
    { id: 2, message: 'hi', likesCount: 9 },
    { id: 3, message: 'YAY! THIS IS MY POST!!!', likesCount: 6 }
  ]

  return (
    <div className={style.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={style.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
        <Post message={postsData[2].message} likesCount={postsData[2].likesCount} />
      </div>
    </div>
  );
}

export default MyPosts;