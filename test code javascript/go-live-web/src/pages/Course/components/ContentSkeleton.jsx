import React from 'react';
import styles from '../style/ContentVideo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ContentSkeleton() {
  return (
    <>
      <div className={cx('wrapper', 'pulsate')}>
        <div className={cx('outer')}>
          <div className={cx('player')}></div>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div
          style={{ width: '70%', height: 40 }}
          className='pulsate mt-12'
        ></div>
        <div style={{ width: '20%', height: 40 }} className='pulsate'></div>
      </div>

      <div style={{ width: '100%', height: 22 }} className='mt-8 pulsate'></div>
      <div style={{ width: '100%', height: 22 }} className='mt-8 pulsate'></div>
      <div style={{ width: '100%', height: 22 }} className='mt-8 pulsate'></div>
    </>
  );
}

export default ContentSkeleton;
