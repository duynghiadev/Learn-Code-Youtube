import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openVideo } from '@/store/actions/course';
import { minutesToHours } from '@/utils/time';
import DownIcon from '@/assets/icons/down.svg?react';
import UpIcon from '@/assets/icons/up.svg?react';
import LockIcon from '@/assets/icons/lock.svg?react';
import styles from '../style/ContentTrack.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ContentTrack(props) {
  const { tracks, courseId, actions, trackOpen, time } = props;
  const [isShow, setIsShow] = useState(true);

  const handleOpenVideo = id => {
    actions.openVideo({ id, courseId, time });
  };

  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <h1>Nội dung khoá học</h1>
      </header>
      {tracks.map(track => (
        <div className={cx('content')} key={track._id}>
          <div className={cx('content-header')}>
            <div>
              <div className={cx('title')}>
                {track?.index}. {track?.name}
              </div>
              <div className={cx('sub-title')}>
                {minutesToHours(track?.totalDuration)}
              </div>
            </div>
            <div
              onClick={() => setIsShow(!isShow)}
              className={cx('cursor-pointer')}
            >
              {(isShow && <UpIcon />) || <DownIcon />}
            </div>
          </div>
          {isShow && (
            <div className={cx('content-tracks')}>
              {track?.trackSteps.map((trackStep, index) => {
                return (
                  <div
                    className={cx('track-wrapper', {
                      active:
                        trackOpen?._id === trackStep._id ||
                        trackStep.info.isLastOpen,
                    })}
                    key={trackStep._id || index}
                    onClick={() => handleOpenVideo(trackStep._id)}
                  >
                    <div className={cx('track-item')}>
                      <div>
                        <div className={cx('title')}>
                          {trackStep.index}. {trackStep.name}
                        </div>
                        <div className={cx('sub-title')}>
                          {minutesToHours(trackStep.duration)}
                        </div>
                      </div>
                      <div>{isEmpty(trackStep.info) && <LockIcon />}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ openVideo }, dispatch),
});

export default connect(null, mapDispatchToProps)(ContentTrack);
