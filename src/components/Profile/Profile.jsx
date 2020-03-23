import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src='https://1.bp.blogspot.com/-ykXOZ0JQMPo/XcIIkIke_MI/AAAAAAAAgTk/SBLPUdZsFbAtlqknkXyDUAG7cdY6-Hq7ACLcBGAsYHQ/s640/city-of-bright-lights-ca-2560x1440.jpg' />
      </div>
      <div>
        ava + description
        </div>
      <MyPosts />
    </div>
  );
}

export default Profile;