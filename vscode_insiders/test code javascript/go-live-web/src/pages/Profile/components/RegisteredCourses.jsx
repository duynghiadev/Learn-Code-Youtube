import React from 'react';
import routes from '@/configs/routes';
import { generatePath, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import style from '../style/Profile.module.scss';
const cx = classNames.bind(style);

function RegisteredCourses({ userCourses }) {
  const registeredCourses = userCourses[0]?.courses;
  const navigate = useNavigate();
  return (
    <div className={cx('course-registered-box')}>
      <div className={cx('courses')}>
        {registeredCourses?.length > 0 ? (
          registeredCourses?.map(course => {
            return (
              <div
                className={cx('course-item')}
                key={course._id}
                onClick={() =>
                  navigate(
                    generatePath(routes.courseSlug.path, { slug: course.slug })
                  )
                }
              >
                <div className={cx('course-item-content')}>
                  <div className={cx('course-banner')}>
                    <img
                      className={cx('course-banner-link')}
                      src={course.thumbnails?.medium?.url || course.thumbnail}
                      loading='lazy'
                      alt='course-banner'
                    />
                  </div>
                  <div className={cx('course-content')}>
                    <h4 className={cx('course-title')}>{course.name}</h4>
                    <p
                      className={cx('course-description')}
                      dangerouslySetInnerHTML={{ __html: course.description }}
                    ></p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Bạn chưa đăng ký khóa học nào cả</p>
        )}
      </div>
    </div>
  );
}

export default RegisteredCourses;
