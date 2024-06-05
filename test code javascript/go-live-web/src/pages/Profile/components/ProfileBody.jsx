import React from 'react';
import UserActivity from './UserActivity';
import RegisteredCourses from './RegisteredCourses';
import classNames from 'classnames/bind';

import style from '../style/Profile.module.scss';
const cx = classNames.bind(style);

function ProfileBody({ userInfo, userCourses }) {
  return (
    <div className={cx('profile-body')}>
      <div className={cx('user-info')}>
        <UserActivity userInfo={userInfo} />
        <RegisteredCourses userCourses={userCourses} />
      </div>
    </div>
  );
}

export default ProfileBody;
