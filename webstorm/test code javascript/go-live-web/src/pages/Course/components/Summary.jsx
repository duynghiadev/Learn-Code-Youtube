import React from 'react';
import SummaryTrack from './SummaryTrack';
import styles from '../style/Summary.module.scss';
import classNames from 'classnames/bind';
import { minutesToHours } from '@/utils/time';

const cx = classNames.bind(styles);

function Summary(props) {
  const {
    name,
    description,
    thumbnail,
    tracks,
    onRegister,
    level,
    trackCount,
    trackTotalDuration,
    price,
  } = props;
  return (
    <div className={cx('summary')}>
      <div className={cx('left')}>
        <div className={cx('title')}>{name}</div>
        <div
          className={cx('description')}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <div className={cx('content')}>
          <div className={cx('title')}>Nội dung khoá học</div>
          <div className={cx('sub')}>
            <div className={cx('text')}>
              <strong>{tracks?.length || 0}</strong> chương •{' '}
              <strong>{trackCount}</strong> bài học • Thời lượng{' '}
              <strong>
                {minutesToHours(trackTotalDuration, 'HH [giờ] mm [phút]')}
              </strong>
            </div>
            <div className={cx('more')}>Mở rộng tất cả</div>
          </div>
        </div>
        {tracks?.map(track => (
          <SummaryTrack track={track} key={track._id} />
        ))}
      </div>

      <div className={cx('right')}>
        <img className={cx('image')} src={thumbnail} alt='course' />
        <h5 className={cx('title')}>{price === 0 ? 'Miễn phí' : price}</h5>
        <button className={cx('btn')} onClick={() => onRegister()}>
          Đăng ký học
        </button>
        <div className={cx('description')}>
          <p>Trình độ {level?.name}</p>
          <p>Tổng số {trackCount} bài học</p>
          <p>
            Thời lượng{' '}
            {minutesToHours(trackTotalDuration, 'HH [giờ] mm [phút]')}
          </p>
          <p>Học mọi lúc mọi nơi</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
