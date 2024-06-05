import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Progress, Space } from 'antd';
import { bindActionCreators } from 'redux';
import { Drawer, Select } from 'antd';

import LogoImage from '@/assets/images/logo.png';
import routes from '@/configs/routes';
import { selectCourse } from '@/store/selector/course';
import { getNote } from '@/store/actions/note';
import { selectVideo } from '@/store/selector/video';
import { selectNotes } from '@/store/selector/note';
import LeftIcon from '@/assets/icons/left.svg?react';
import { minutesToHours } from '@/utils/time';

const TypeNote = ({ getNote, courseId, videoId, videoGroupId }) => {
  const options = [
    { value: 1, label: 'Ghi chú Khoá học' },
    { value: 2, label: 'Ghi chú Chương' },
    { value: 3, label: 'Ghi chú Video' },
  ];

  const handleOnChange = event => {
    switch (event) {
      case 1:
        getNote({ keyword: 'course', value: courseId });
        break;
      case 2:
        getNote({ keyword: 'videoGroup', value: videoGroupId });
        break;
      case 3:
        getNote({ keyword: 'video', value: videoId });
        break;
      default:
        break;
    }
  };

  return (
    <Space wrap>
      <Select
        options={options}
        style={{ width: 150 }}
        defaultValue={3}
        onChange={handleOnChange}
      />
    </Space>
  );
};

const Note = ({ note }) => {
  const { time, content, video, videoGroup } = note;
  return (
    <div className='header-course-note'>
      <div>
        <div className='note-title-wrapper'>
          <span className='note-title-time'>{minutesToHours(time)}</span>
          <span className='note-title-group'>{videoGroup.name}</span>
          <span className='note-title-video'>{video.name}</span>
        </div>
      </div>

      <div
        className='note-content'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

function HeaderCourse(props) {
  const {
    course: { data: dataCourse, trackCount, trackSuccess },
    video: { data: dataVideo },
    actions,
    notes,
  } = props;
  const navigate = useNavigate();
  const [showNote, setShowNote] = useState();
  const [width, setWidth] = useState(window.innerWidth >= 700 ? 700 : '100%');

  useEffect(() => {
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  const handleWidth = () => {
    if (window.innerWidth < 700) setWidth('100%');
    else setWidth(700);
  };

  const handlGoBack = () => {
    navigate(routes.home.path);
  };

  const handleShowNote = () => {
    setShowNote(true);
    actions.getNote({ keyword: 'video', value: dataVideo._id });
  };

  const handleCloseNote = () => {
    setShowNote(false);
  };

  return (
    <div className='header-course'>
      <div
        className='header-course-left flex items-center'
        onClick={() => handlGoBack()}
      >
        <img width={38} height={38} src={LogoImage} alt='logo' />
        <div className='title flex items-center'>
          <LeftIcon className='fz-20' />
          {dataCourse?.name}
        </div>
      </div>

      <div className='header-course-right'>
        <Progress
          type='circle'
          percent={Math.round((trackSuccess / trackCount) * 100)}
          size={40}
        />
        <div className='text'>
          {trackSuccess}/{trackCount} bài học
        </div>
        <div className='text cursor-pointer' onClick={handleShowNote}>
          Ghi chú
        </div>
        <div className='text'>Hướng dẫn</div>
      </div>

      <Drawer
        title='Ghi chú trong khoá học'
        open={showNote}
        placement='right'
        width={width}
        onClose={handleCloseNote}
        extra={
          <TypeNote
            getNote={actions.getNote}
            courseId={dataCourse._id}
            videoGroupId={dataVideo.group}
            videoId={dataVideo._id}
          />
        }
      >
        {notes.data.map(note => {
          return <Note note={note} key={note._id} />;
        })}
      </Drawer>
    </div>
  );
}

const mapStateToProps = state => ({
  course: selectCourse(state),
  video: selectVideo(state),
  notes: selectNotes(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getNote }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(HeaderCourse));
