import React from 'react';
import { Popover, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import NavigateItem from './NavigateItem';
import HomeIcon from '@/assets/icons/home.svg?react';
import LampIcon from '@/assets/icons/lamp.svg?react';
import RoadIcon from '@/assets/icons/road.svg?react';
import PaperIcon from '@/assets/icons/paper.svg?react';
import PlusIcon from '@/assets/icons/plus.svg?react';
import MessageIcon from '@/assets/icons/message.svg?react';
import GroupIcon from '@/assets/icons/group.svg?react';
import routes from '@/configs/routes';
import styles from './style/NavigateLayout.module.scss';

const cx = classNames.bind(styles);

const PlusAction = () => {
  const actions = [
    {
      key: routes.newPost.path,
      label: 'Viết bài Blog',
      icon: <PlusIcon />,
    },
  ];

  return (
    <div>
      {actions.map(action => {
        return (
          <NavLink to={action.key} key={action.key}>
            <div className={cx('navigate-item')}>
              {action.icon}
              <span>{action.label}</span>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

function NavigateLayout() {
  const navigateItems = [
    {
      label: 'Trang chủ',
      key: routes.home.path,
      icon: <HomeIcon />,
    },
    {
      label: 'Lớp học',
      key: routes.classroom.path,
      icon: <GroupIcon />,
    },
    {
      label: 'Lộ trình',
      key: routes.learningPaths.path,
      icon: <RoadIcon />,
    },
    {
      label: 'Khoá Học',
      key: routes.course.path,
      icon: <LampIcon />,
    },
    {
      label: 'Nhắn tin',
      key: routes.chat.path,
      icon: <MessageIcon />,
    },
    {
      label: 'Bài viết',
      key: routes.blog.path,
      icon: <PaperIcon />,
    },
  ];

  return (
    <div className='navigate-layout'>
      <Space>
        <Popover
          placement='rightTop'
          trigger='click'
          content={<PlusAction />}
          overlayClassName={cx('plus-wrapper')}
        >
          <div className='plus cursor-pointer'>
            <PlusIcon />
          </div>
        </Popover>
      </Space>
      <div className='navigate-items'>
        {navigateItems.map(item => {
          return (
            <NavigateItem
              key={item.key}
              link={item.key}
              icon={item.icon}
              label={item.label}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NavigateLayout;
