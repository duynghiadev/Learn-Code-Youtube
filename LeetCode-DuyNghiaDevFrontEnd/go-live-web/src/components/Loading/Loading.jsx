import React from 'react';
import classNames from 'classnames/bind';
import styles from './style/Loading.module.scss';

const cx = classNames.bind(styles);

export default function Loading() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('loading')}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
