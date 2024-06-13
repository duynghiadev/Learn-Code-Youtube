import React from 'react';
import CourseItemSkeleton from './CourseItemSkeleton';
import { v4 as uuidv4 } from 'uuid';

function CourseSkeleton({ length = 8 }) {
  const array = Array.from({ length }, _ => uuidv4());

  return (
    <div className='groups'>
      <div>
        <div className='group-title pulsate' style={{ width: 500 }}></div>
      </div>
      <div className='courses' style={{ overflow: 'hidden' }}>
        {array.map(skeleton => (
          <CourseItemSkeleton key={skeleton} />
        ))}
      </div>
    </div>
  );
}

export default CourseSkeleton;
