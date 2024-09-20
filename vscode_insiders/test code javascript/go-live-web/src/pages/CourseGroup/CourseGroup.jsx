import React, { useEffect } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { selectCourseGroupData } from '@/store/selector/course';
import { getCourseGroupBySlug } from '@/store/actions/course';
import { connect } from 'react-redux';
import { CourseItem } from '@/components/Course';
import styles from './style/CourseGroup.module.scss';
import classNames from 'classnames/bind';
import routes from '@/configs/routes';

const cx = classNames.bind(styles);
function CourseGroup(props) {
  const { slug } = useParams();
  const { actions, courseGroupData } = props;
  const courseGroup = courseGroupData.find(item => item.slug === slug);

  useEffect(() => {
    handleRequestCourseGroup();
  }, [slug]);

  console.log(courseGroup);

  const handleRequestCourseGroup = async () => {
    try {
      if (!courseGroup) {
        await actions.getCourseGroupBySlug({ slug });
      }
    } catch (error) {}
  };

  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>{courseGroup?.name}</h1>
      <div className={cx('courses-wrapper')}>
        {(courseGroup?.courses || []).map(course => {
          return (
            <CourseItem
              key={course._id}
              link={generatePath(routes.courseSlug.path, { slug: course.slug })}
              image={course.thumbnails.medium.url}
              title={course.name}
              count={course.registeredStudents}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  courseGroupData: selectCourseGroupData(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getCourseGroupBySlug }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseGroup);
