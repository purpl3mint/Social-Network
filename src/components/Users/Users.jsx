import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './users.module.css';
import userImage from '../../images/unnamed.jpg';
import * as axios from 'axios';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  console.log(props.totalUsersCount);

  return <div>
    <div className={style.pagination}>
      {pages.map(p => {
        return <span className={props.currentPage === p && style.selectedPage}
          onClick={(e) => { props.onPageChaged(p) }}>{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id} className={style.userContainer}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userImage} className={style.userPhoto} />
            </NavLink>
          </div>
          <div>
            {u.followed ?
              <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "efb63229-5620-41d2-8970-2d7a87f850e9"
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                  });

              }}>Unfollow</button> :
              <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "efb63229-5620-41d2-8970-2d7a87f850e9"
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id);
                    }
                  });

              }}>Follow</button>}
          </div>
        </span>
        <span className={style.userInfo}>
          <span className={style.username}>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.city'}</div>
            <div>{'u.location.country'}</div>
          </span>
        </span>
      </div>)
    }
  </div >
}

export default Users;