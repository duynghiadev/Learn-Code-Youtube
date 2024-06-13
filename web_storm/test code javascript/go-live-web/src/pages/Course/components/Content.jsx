import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContentVideo from './ContentVideo';
import ContentTrack from './ContentTrack';
import { minutesToHours } from '@/utils/time';
import { getVideoById } from '@/store/actions/video';
import { selectVideo } from '@/store/selector/video';
import dayjs from 'dayjs';
import { Drawer } from 'antd';
import ArrowLeft from '@/assets/icons/arrow_left.svg?react';
import ArrowRight from '@/assets/icons/arrow_right.svg?react';
import { openVideo } from '@/store/actions/course';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { createNote } from '@/store/actions/note';
import RightIcon from '@/assets/icons/right.svg?react';
import LeftIcon from '@/assets/icons/left.svg?react';
import styles from '../style/Content.module.scss';
import classNames from 'classnames/bind';
import ContentSkeleton from './ContentSkeleton';
import { useSearchParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const LessThanScreen = 1200;

function Content(props) {
  const {
    tracks,
    trackOpen,
    trackWatching,
    video: { data: dataVideo, requesting: requestingVideo },
    courseId,
    actions,
  } = props;
  // eslint-disable-next-line no-unused-vars
  const [_searchParams, setSearchParams] = useSearchParams();
  const [showMore, setShowMore] = useState(false);
  const [currentTime, setCurrentTime] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [isWidthLessThanHD, setIsWidthLessThanHD] = useState(
    window.innerWidth <= LessThanScreen
  );
  const [showTrack, setShowTrack] = useState(
    window.innerWidth > LessThanScreen
  );
  const [isNextTrack, setIsNextTrack] = useState(false);
  const [editor, setEditor] = useState(null);
  const [html, setHtml] = useState(null);
  const toolbarConfig = {};
  const editorConfig = {
    placeholder: 'Nhập ghi chú của bạn...',
    autoFocus: true,
  };

  const time = !!currentTime ? currentTime : dataVideo?.info?.time;

  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (trackWatching) {
      setSearchParams({ id: trackWatching });
      actions.getVideoById({ id: trackWatching });
    }
  }, [trackWatching]);

  const handleTimeUpdate = time => {
    return dayjs(time).format('[Cập nhật ngày] DD [tháng] MM [năm] YYYY');
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= LessThanScreen) {
      setShowTrack(false);
      setIsWidthLessThanHD(true);
    } else {
      setShowTrack(true);
      setIsWidthLessThanHD(false);
    }
  };

  const handleNote = () => {
    setPlaying(false);
    setShowNote(true);
    editor?.focus();
  };

  const handleHiddenNote = () => {
    setShowNote(false);
    setPlaying(true);
    editor?.blur();
  };

  const handleToggleTrack = () => {
    setShowTrack(!showTrack);
  };

  const handleOpenVideo = id => {
    actions.openVideo({ id, courseId, time });
  };

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  const handleAddNote = () => {
    actions.createNote({
      content: html,
      course: courseId,
      video: dataVideo._id,
      videoGroup: dataVideo.group,
      time: currentTime,
    });
    setHtml(null);
    setShowNote(false);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('left')}>
          {requestingVideo ? (
            <ContentSkeleton />
          ) : (
            <>
              <ContentVideo
                setCurrentTime={setCurrentTime}
                data={dataVideo}
                playing={playing}
                setPlaying={setPlaying}
                setIsNextTrack={setIsNextTrack}
              />
              <div className={cx('description')}>
                <div>
                  <h1 className={cx('title')}>{dataVideo.name}</h1>
                  <div className={cx('sub-title')}>
                    {handleTimeUpdate(dataVideo.updatedAt)}
                  </div>
                </div>
                <div>
                  <button className={cx('btn')} onClick={handleNote}>
                    + Thêm ghi chú tại {minutesToHours(currentTime)}
                  </button>
                </div>
              </div>
              <div>
                <div
                  className={cx('more', { block: showMore })}
                  dangerouslySetInnerHTML={{ __html: dataVideo.description }}
                ></div>
                <div
                  className='fz-14 cursor-pointer mt-16'
                  onClick={handleToggleMore}
                >
                  {!showMore ? 'Xem thêm' : 'Rút gọn'}
                </div>
              </div>
            </>
          )}
        </div>

        {showTrack && (
          <div
            className={cx('right', {
              'right--absolute': isWidthLessThanHD,
            })}
          >
            <ContentTrack
              tracks={tracks}
              courseId={courseId}
              trackOpen={trackOpen}
              time={time}
            />
          </div>
        )}
      </div>

      <div
        className={cx('footer', {
          'footer--absolute': isWidthLessThanHD,
        })}
      >
        <div className={cx('footer-content')}>
          <button
            className={cx('prev', {
              disabled: !dataVideo.hasPrev,
            })}
            onClick={() => handleOpenVideo(dataVideo.hasPrev._id)}
          >
            <LeftIcon className='fz-20' /> <span>Bài trước</span>
          </button>
          <button
            className={cx('next', {
              disabled: !isNextTrack || !dataVideo.hasNext,
            })}
            onClick={() => handleOpenVideo(dataVideo.hasNext._id)}
          >
            <span>Bài tiếp theo</span> <RightIcon className='fz-20' />
          </button>
        </div>
        <div className={cx('toggle-track')}>
          <div className={cx('toggle-track-name')}>{dataVideo.name}</div>
          <div className={cx('toggle-track-btn')} onClick={handleToggleTrack}>
            {showTrack ? <ArrowRight /> : <ArrowLeft />}
          </div>
        </div>
      </div>

      <Drawer
        headerStyle={{ display: 'none' }}
        className={cx('drawer-note')}
        placement='bottom'
        height={560}
        open={showNote}
        onClose={handleHiddenNote}
      >
        <div className='flex justify-center align-content-center'>
          <div style={{ maxWidth: 1200 }}>
            <h2 className='mb-12'>
              Ghi chú video tại phút {minutesToHours(currentTime)}
            </h2>
            <div>
              <Toolbar
                editor={editor}
                defaultConfig={toolbarConfig}
                mode='default'
              />
              <Editor
                defaultConfig={editorConfig}
                value={html}
                onCreated={setEditor}
                onChange={editor => setHtml(editor.getHtml())}
                mode='default'
                style={{ height: '300px', overflowY: 'auto' }}
              />
            </div>
            <div className='flex justify-end mt-20' style={{ gap: 12 }}>
              <button className={cx('cancel-btn')} onClick={handleHiddenNote}>
                Huỷ bỏ
              </button>
              <button className={cx('note-btn')} onClick={handleAddNote}>
                Tạo ghi chú
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

const mapStateToProps = state => ({ video: selectVideo(state) });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getVideoById, openVideo, createNote },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
