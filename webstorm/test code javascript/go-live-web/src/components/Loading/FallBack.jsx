import React from 'react';
import classNames from 'classnames/bind';
import styles from './style/FallBack.module.scss';

const cx = classNames.bind(styles);

function FallBack() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('grid')}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default FallBack;
