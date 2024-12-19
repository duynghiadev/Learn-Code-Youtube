import dayjs from 'dayjs';
import React from 'react';

export const Comment = ({ name, content, createdAt }) => {
  return (
    <div className='border py-1 px-2 rounded mb-1'>
      <p className='font-bold text-sm'>
        {name}{' '}
        <span className='text-[#cdcdcd] italic text-xs ml-3'>
          {dayjs(createdAt).format('DD/MM/YYYY HH:mm:ss')}
        </span>
      </p>
      <p className='text-sm'>{content}</p>
    </div>
  );
};
