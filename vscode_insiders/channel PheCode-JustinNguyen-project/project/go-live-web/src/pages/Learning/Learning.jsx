import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { generatePath, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './style/Learning.module.scss';

import CourseSkeleton from '@/components/Course/CourseSkeleton';
import Courses from '@/components/Course/Courses';
import CoursesSkeleton from '@/components/Course/CoursesSkeleton';
import { getCourseGroup } from '@/store/actions/course';
import {
  selectCourseGroup,
  selectCourseGroupData,
} from '@/store/selector/course';
import routes from '@/configs/routes';

const cx = classNames.bind(styles);

function Learning(props) {
  const navigate = useNavigate();
  const { actions, courseGroup, courseGroupData } = props;
  const { requesting } = courseGroup;

  useEffect(() => {
    actions.getCourseGroup();
  }, []);

  const handleSetGroupInfo = item => {
    navigate(generatePath(routes.courseGroups.path, { slug: item.slug }));
  };

  return (
    <div className={cx('wrapper')}>
      <div className='mb-32'>
        <h1>Khoá học</h1>
        <p>
          Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học
          miễn phí, chất lượng, nội dung dễ hiểu.
        </p>
      </div>
      {(requesting && <CoursesSkeleton length={4} />) ||
        courseGroupData.map(
          item =>
            (item.requesting && <CourseSkeleton key={item.slug} />) || (
              <Courses
                key={item.slug}
                title={item.name}
                onClickTitle={() => handleSetGroupInfo(item)}
                courses={item.courses}
              />
            )
        )}
    </div>
  );
}

const mapStateToProps = state => ({
  courseGroup: selectCourseGroup(state),
  courseGroupData: selectCourseGroupData(state),
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getCourseGroup }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
