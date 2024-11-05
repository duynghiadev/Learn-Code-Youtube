import React from 'react';
import styles from './style/CourseItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CourseItemSkeleton() {
  return (
    <div className={cx('course-item')}>
      <div
        className={cx(
          'img-container',
          'thumbnail',
          'thumbnail--16by9',
          'pulsate'
        )}
      ></div>
      <div className={cx('title', 'pulsate')}></div>
      <div className={cx('counter', 'pulsate')}></div>
    </div>
  );
}

export default CourseItemSkeleton;
