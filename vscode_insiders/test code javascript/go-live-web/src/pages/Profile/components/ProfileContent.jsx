import classNames from 'classnames/bind';
import React, { useState } from 'react';
import style from '../style/Profile.module.scss';
import ProfileBody from './ProfileBody';
import ProfileHead from './ProfileHead';

const cx = classNames.bind(style);

function ProfileContent({ userCourses }) {
  const [userInfo, setUserInfo] = useState({});
  return (
    <div className={cx('profile-content')}>
      <ProfileHead setUserInfo={setUserInfo} userInfo={userInfo} />
      <ProfileBody userInfo={userInfo} userCourses={userCourses} />
    </div>
  );
}

export default ProfileContent;
