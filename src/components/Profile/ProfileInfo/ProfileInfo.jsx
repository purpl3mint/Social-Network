import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../images/unnamed.jpg';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      {
        /*<div>
          <img src='https://1.bp.blogspot.com/-ykXOZ0JQMPo/XcIIkIke_MI/AAAAAAAAgTk/SBLPUdZsFbAtlqknkXyDUAG7cdY6-Hq7ACLcBGAsYHQ/s640/city-of-bright-lights-ca-2560x1440.jpg' />
        </div>*/
      }
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={style.mainPhoto} />
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;