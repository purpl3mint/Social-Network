import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src='https://cs6.pikabu.ru/avatars/1148/v1148667-1084900014.jpg' />
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;