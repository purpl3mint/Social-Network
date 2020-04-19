import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus.jsx';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {
        /*<div>
          <img src='https://1.bp.blogspot.com/-ykXOZ0JQMPo/XcIIkIke_MI/AAAAAAAAgTk/SBLPUdZsFbAtlqknkXyDUAG7cdY6-Hq7ACLcBGAsYHQ/s640/city-of-bright-lights-ca-2560x1440.jpg' />
        </div>*/
      }
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status="Hola" />
      </div>
    </div>
  );
}

export default ProfileInfo;