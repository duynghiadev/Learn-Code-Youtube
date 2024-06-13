import { Modal } from 'antd';
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from '../style/ContentVideo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Video(props) {
  const { data, setCurrentTime, playing, setPlaying, setIsNextTrack } = props;
  const videoRef = useRef(null);
  const [process, setProcess] = useState({
    played: 0,
    loaded: 0,
    loadedSeconds: 0,
    playedSeconds: 0,
  });
  const [timePrevPlayed, setTimePrevPlayed] = useState(0);
  const [timePrev, setTimePrev] = useState(new Date());
  const [showAlert, setShowAlert] = useState(false);

  const { played } = process;

  const [duration, setDuration] = useState(0);

  const handleOnPlay = () => {
    setPlaying(true);
  };

  const handleOnPause = () => {
    setPlaying(false);
  };

  const handleOnStart = () => {
    console.log('start time');
  };

  const handleOnProcess = state => {
    if (!process?.seeking) {
      setProcess(state);
      setCurrentTime(duration * played);
      if (state.played > 0.95) setIsNextTrack(true);
      else setIsNextTrack(false);
    }

    if (process.playedSeconds === 0) {
      setTimePrevPlayed(state.playedSeconds);
      setTimePrev(new Date());
    } else {
      const diffTime = (new Date() - timePrev) / 1000;
      if (
        (process.playedSeconds !== 0 &&
          state.playedSeconds - process.playedSeconds > 15) ||
        state.playedSeconds - timePrevPlayed > diffTime + 15
      ) {
        setPlaying(false);
        setShowAlert(true);
        setTimePrevPlayed(state.playedSeconds);
        setTimePrev(new Date());
      }
    }
  };

  const handleOnEnd = () => {
    console.log('end time');
  };

  const handleOnDuration = duration => setDuration(duration);

  const handleCancelAlert = () => {
    setPlaying(true);
    setShowAlert(false);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('outer')}>
        <div className={cx('player')}>
          <ReactPlayer
            width='100%'
            height='100%'
            onPlay={handleOnPlay}
            onPause={handleOnPause}
            playing={playing}
            className={cx('iframe')}
            onStart={handleOnStart}
            onProgress={handleOnProcess}
            onEnded={handleOnEnd}
            onDuration={handleOnDuration}
            url={data?.url}
            controls={true}
            ref={videoRef}
          />
        </div>
      </div>
      <Modal
        open={showAlert}
        title='Cảnh báo'
        okText='Đóng'
        footer={null}
        onCancel={handleCancelAlert}
      >
        Bạn có vẻ đang tua rất nhanh, rất có thể anh hưởng đến chất lượng học.
        Nếu bạn không muốn nhìn thấy thông báo này vui lòng tắt chế dộ nghiêm
        ngặt (Cấu hình cá nhân).
      </Modal>
    </div>
  );
}

export default Video;
