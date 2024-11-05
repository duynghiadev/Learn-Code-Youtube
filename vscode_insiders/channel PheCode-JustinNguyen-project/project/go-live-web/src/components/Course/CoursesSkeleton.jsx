import React from 'react';
import CourseSkeleton from './CourseSkeleton';
import { v4 as uuidv4 } from 'uuid';

function CoursesSkeleton({ length = 2 }) {
  const array = Array.from({ length }, _ => uuidv4());
  return (
    <>
      {array.map(item => (
        <CourseSkeleton key={item} />
      ))}
    </>
  );
}

export default CoursesSkeleton;
