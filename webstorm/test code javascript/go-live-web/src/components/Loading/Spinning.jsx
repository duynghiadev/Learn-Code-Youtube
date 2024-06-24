import React from 'react';
import classNames from 'classnames/bind';
import styles from './style/Spinning.module.scss';

const cx = classNames.bind(styles);

function Spinning({ children, spinning }) {
  return (
    <div className={cx('wrapper')}>
      {children}
      {spinning && (
        <div className={cx('overlay')}>
          <div className={cx('spinning')}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Spinning;
