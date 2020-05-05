import React from 'react';
import style from './users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChaged, users, ...props }) => {

  return <div>
    <Paginator
      currentPage={currentPage}
      onPageChaged={onPageChaged}
      totalItemsCount={totalUsersCount}
      pageSize={pageSize}
    />
    {
      users.map(u => <User
        user={u}
        followingInProgress={props.followingInProgress}
        unfollow={props.unfollow}
        follow={props.follow}
        key={u.id}
      />)
    }
  </div >
}

export default Users;