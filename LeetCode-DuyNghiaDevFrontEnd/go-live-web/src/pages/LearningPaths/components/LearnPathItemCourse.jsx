import React from 'react';

const LearnPathItemCourse = props => {
  const { size, title, content, price, cost, imageUrl } = props;
  return (
    <div
      className={`w-full flex justify-content-left ${
        size === 'default' ? 'size-default' : 'size-small'
      }`}
    >
      <img
        src={imageUrl || 'https://files.fullstack.edu.vn/f8-prod/courses/7.png'}
        alt='Kiến Thức Nhập Môn IT'
      />
      <div>
        <h2>{title}</h2>
        <p className='lh-14 fz-14 fw-300 mb-6 mt-6'>
          {price > 0 && cost && (
            <span className='text-underline mr-15'>{`${new Intl.NumberFormat().format(
              cost
            )} đ`}</span>
          )}
          <span className='current-price'>
            {price > 0
              ? `${new Intl.NumberFormat().format(price)} đ`
              : 'Miễn phí'}
          </span>
        </p>
        <p className='lh-14 fz-14 fw-300 mb-10 content'>{content}</p>
        {size === 'default' && <button className='btn'>Xem khóa học</button>}
      </div>
    </div>
  );
};

export default LearnPathItemCourse;
