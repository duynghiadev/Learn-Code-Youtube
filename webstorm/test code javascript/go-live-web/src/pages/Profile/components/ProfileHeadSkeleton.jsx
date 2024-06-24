import React from 'react';
import classNames from 'classnames/bind';

import style from '../style/Profile.module.scss';
const cx = classNames.bind(style);

const tabs = [
  { key: 0, label: 'Khoá học' },
  { key: 1, label: 'Lộ trình' },
  { key: 2, label: 'Công cụ' },
];

function ProfileHeadSkeleton() {
  return (
    <>
      <div className={cx('profile-head')}>
        <div
          className={cx('profile-head-bg', 'pulsate')}
          style={{ background: 'unset' }}
        ></div>

        <div className={cx('profile-head-content')}>
          <div className={cx('avt-profile-img', 'pulsate')}></div>
          <div className={cx('user-name')}>
            <div className='pulsate' style={{ height: 24, width: 280 }}></div>
            <div
              className='mt-8 pulsate'
              style={{ height: 16, width: 120 }}
            ></div>
          </div>
        </div>

        <div className={cx('divider')}></div>
      </div>

      <div className={cx('profile-nav')}>
        <div className={cx('profile-nav-content')}>
          <div className={cx('profile-nav-items')}>
            {tabs.map(item => {
              return (
                <div className={cx('nav-item')} key={item.key}>
                  <div>{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileHeadSkeleton;
