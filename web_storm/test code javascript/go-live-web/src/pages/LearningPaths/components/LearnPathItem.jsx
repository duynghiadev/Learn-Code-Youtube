import React from 'react';
import LearnPathItemCourse from './LearnPathItemCourse';

const LearnPathItem = () => {
  return (
    <div>
      <h2 className='pb-25'>1. Tìm hiểu về ngành IT</h2>
      <p className='lh-14 fz-16 fw-300 mb-10'>
        Để theo ngành IT - Phần mềm cần rèn luyện những kỹ năng nào? Bạn đã có
        sẵn tố chất phù hợp với ngành chưa? Cùng thăm quan các công ty IT và tìm
        hiểu về văn hóa, tác phong làm việc của ngành này nhé các bạn.
      </p>
      <div className='learn-paths-item-course rounded-20 p-25 mt-25 mb-25 '>
        <LearnPathItemCourse
          size='default'
          title='HTML CSS Pro'
          cost={2499000}
          currentPrice={1299000}
          content='Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.'
        />
        <p className='mt-25 mb-25 fz-16 fw-400'>Khóa học liên quan</p>
        <div className='learn-paths-item-subcourse'>
          <LearnPathItemCourse
            size='small'
            title='HTML CSS từ Zero đến Hero'
            currentPrice='Miễn phí'
            content='Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.'
          />
          <LearnPathItemCourse
            size='small'
            title='HTML CSS từ Zero đến Hero'
            currentPrice='Miễn phí'
            content='Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.'
          />
        </div>
      </div>
    </div>
  );
};

export default LearnPathItem;
