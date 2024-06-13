import React, { useRef, useState, useEffect } from 'react';
import { generatePath } from 'react-router-dom';

import { CourseItem } from '@/components/Course';
import routes from '@/configs/routes';
import RightIcon from '@/assets/icons/right.svg?react';
import LeftIcon from '@/assets/icons/left.svg?react';

function Courses(props) {
  const scrollContainerRef = useRef(null);
  const { courses, title, onClickTitle } = props;
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      handleScroll();
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [courses, scrollContainerRef.current]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    setIsBeginning(container.scrollLeft === 0);
    setIsEnd(
      container.scrollLeft + container.clientWidth >= container.scrollWidth
    );
  };

  const handleNextClick = () => {
    scrollContainerRef.current.scrollLeft +=
      scrollContainerRef.current.offsetWidth - 100;
  };

  const handlePreviousClick = () => {
    scrollContainerRef.current.scrollLeft -=
      scrollContainerRef.current.offsetWidth - 100;
  };

  return (
    <div className='groups'>
      <div>
        <div className='group-title' onClick={onClickTitle}>
          <h2 className='title'>{title}</h2>
          <span className='see-all'>Xem tất cả </span>
          <span className='arrow'>&#62;</span>
        </div>
        <div className='group-content'>
          <div className='courses' ref={scrollContainerRef}>
            {courses.map((course, index) => {
              return (
                <CourseItem
                  key={course._id || index}
                  link={generatePath(routes.courseSlug.path, {
                    slug: course.slug,
                  })}
                  image={course.thumbnails.medium.url}
                  title={course.name}
                  count={course.registeredStudents}
                />
              );
            })}
          </div>
          {!isEnd && (
            <span className='courses-next' onClick={handleNextClick}>
              <RightIcon className='icon-btn' />
            </span>
          )}
          {!isBeginning && (
            <span className='courses-prev'>
              <LeftIcon className='icon-btn' onClick={handlePreviousClick} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
