import React from 'react';
import style from './Post.module.css';

const Post = () => {
  return (
    <div className={style.item}>
      <img src='https://cs6.pikabu.ru/avatars/1148/v1148667-1084900014.jpg' />
        Post 0
      <span>Like</span>
    </div>
  );
}

export default Post;