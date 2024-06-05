import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import style from '../style/Profile.module.scss';
import { useParams } from 'react-router-dom';
import userApi from '@/api/userApi';
import ProfileHeadSkeleton from './ProfileHeadSkeleton';
const cx = classNames.bind(style);

const tabs = [
  { key: 0, label: 'Khoá học' },
  { key: 1, label: 'Lộ trình' },
  { key: 2, label: 'Công cụ' },
];

function ProfileHead({ setUserInfo, userInfo }) {
  const navRef = useRef(null);

  const { username } = useParams();
  const [requesting, setRequesting] = useState(false);
  const [isAvtNav, setIsAvtNav] = useState(false);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleWheel = () => {
    const userElement = navRef?.current;
    if (userElement) {
      const { top } = navRef?.current?.getBoundingClientRect();
      setIsAvtNav(top <= 56);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [username]);

  const fetchUser = async () => {
    try {
      setRequesting(true);
      const data = await userApi.getUser(username);
      if (data?.success) {
        setUserInfo(data.data);
      }
    } catch (error) {
    } finally {
      setRequesting(false);
    }
  };

  if (requesting) return <ProfileHeadSkeleton />;

  return (
    <>
      <div className={cx('profile-head')}>
        <div className={cx('profile-head-bg')}></div>

        <div className={cx('profile-head-content')}>
          <div className={cx('avt-profile-img')}>
            <img
              className={cx('avt-profile-link')}
              src={
                userInfo.avatarImage ||
                'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
              }
              loading='auto'
              alt='avt-profile'
            />
          </div>
          <div className={cx('user-name')}>
            <div>{userInfo.fullName}</div>
            <div className={cx('sub-name')}>Developer</div>
          </div>
        </div>

        <div className={cx('divider')}></div>
      </div>

      <div className={cx('profile-nav')} ref={navRef}>
        <div className={cx('profile-nav-content')}>
          <div className={cx('profile-nav-items')}>
            {tabs.map(item => {
              return (
                <div
                  className={cx('nav-item', item.key === 0 && 'active')}
                  key={item.key}
                >
                  <div>{item.label}</div>
                </div>
              );
            })}
          </div>

          {isAvtNav && (
            <div className={cx('profile-avt')}>
              <div className={cx('profile-avt-img')}>
                <img
                  src={
                    userInfo.avatarImage ||
                    'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
                  }
                  loading='auto'
                  alt='avt-profile'
                />
              </div>
              <div className={cx('profile-avt-name')}>{userInfo.fullName}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileHead;
