import React from 'react';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';

import HeartIcon from '@/assets/icons/heart.svg?react';
import style from '../style/Profile.module.scss';
const cx = classNames.bind(style);

function UserActivity({ userInfo }) {
  return (
    <div className={cx('activity-container')}>
      <div className={cx('introduction')}>
        <h3 className={cx('introduction-title')}>giới thiệu</h3>
        <div className={cx('introduction-content')}>
          <div className={cx('introduction-content-item')}>
            <HeartIcon />
            <span>
              Thành viên của <strong>Go Live</strong> từ{' '}
              {dayjs(userInfo.createdAt).format(
                '[ngày] DD [tháng] MM [năm] YYYY'
              )}
            </span>
          </div>
        </div>
      </div>
      <div className={cx('activity')}>
        <h3 className={cx('activity-title')}>Hoạt động gần đây</h3>
        <div className={cx('activity-content')}>
          <div className={cx('activity-content-item')}>
            <span>Chưa có hoạt động gần đây</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserActivity;
