import React from 'react';
import styles from '../style/SummaryTrack.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SummaryTrack(props) {
  const { track } = props;
  return (
    <div className={cx('summary-content')}>
      <div className={cx('summary-content-title')}>
        <div className={cx('summary-content-title-left')}>
          {track?.index}. {track?.name}
        </div>
        <div className={cx('summary-content-title-right')}>
          {track?.trackSteps.length} bài học
        </div>
      </div>
      <div className={cx('summary-content-child')}>
        {track?.trackSteps.map((trackStep, index) => {
          return (
            <div className={cx('summary-content-child-item')} key={index}>
              {trackStep.index}. {trackStep.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SummaryTrack;
