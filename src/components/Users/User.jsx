import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './users.module.css';
import userImage from '../../images/unnamed.jpg';

let User = ({ user, followingInProgress, unfollow, follow }) => {

  return (
    <div className={style.userContainer}>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userImage} className={style.userPhoto} />
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => { unfollow(user.id); }}>
              Unfollow
              </button>
            : <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => { follow(user.id); }}>
              Follow
              </button>}
        </div>
      </span>
      <span className={style.userInfo}>
        <span className={style.username}>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'u.location.city'}</div>
          <div>{'u.location.country'}</div>
        </span>
      </span>
    </div>
  );
}

export default User;