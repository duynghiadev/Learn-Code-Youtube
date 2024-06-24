import React from 'react';
import { useNavigate } from 'react-router-dom';

import UserGroupIcon from '@/assets/icons/user_group.svg?react';
import { formatText } from '@/utils/number';
import styles from './style/CourseItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CourseItem(props) {
  const navigate = useNavigate();
  const { image, title, count, link } = props;
  return (
    <div className={cx('course-item')}>
      <div className={cx('img-container', 'thumbnail', 'thumbnail--16by9')}>
        <img
          src={image || 'https://files.fullstack.edu.vn/f8-prod/courses/7.png'}
          loading='lazy'
          alt={title}
        />
        <div className={cx('overlay')} onClick={() => navigate(link)}>
          <div className={cx('text')}>
            <div>Xem khóa học</div>
          </div>
        </div>
      </div>
      <div className={cx('title')}>{title || 'Kiến thức nhập môn'}</div>
      <div className={cx('counter')}>
        <UserGroupIcon /> <span>{formatText(count || 0)}</span>
      </div>
    </div>
  );
}

export default CourseItem;
