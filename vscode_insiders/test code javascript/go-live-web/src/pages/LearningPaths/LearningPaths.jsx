import React from 'react';

import LearnPathItem from './components/LearnPathItem';
import { Link } from 'react-router-dom';

const LearningPaths = () => {
  return (
    <div className='learn-paths'>
      <h1 className='mb-30'>Lộ trình học Back-end</h1>
      <p className='lh-14 fz-16 fw-300 mt-15 mb-15 mw-50'>
        Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và
        Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể
        tương tác. Back-end là nơi xử lý dữ liệu và lưu trữ. Vì vậy, nhiệm vụ
        của lập trình viên Back-end là phân tích thiết kế dữ liệu, xử lý logic
        nghiệp vụ của các chức năng trong ứng dụng.
      </p>
      <p className='lh-14 fz-16 fw-300 mt-10 mb-10 mw-50'>
        Tại Việt Nam,
        <Link
          href='https://jobsgo.vn/muc-luong-lap-trinh-frontend/ha-noi.html'
          target='_blank'
          className='link fw-500'
        >
          lương trung bình
        </Link>
        cho lập trình viên Back-end vào khoảng <b>19.000.000đ </b>/ tháng.
      </p>
      <p className='lh-14 fz-16 fw-300 mt-10 mb-10 mw-50'>
        Dưới đây là các khóa học F8 đã tạo ra dành cho bất cứ ai theo đuổi sự
        nghiệp trở thành một lập trình viên Back-end.
      </p>
      <p className='relative pl-20 markdown-paragraph'>
        Các khóa học có thể chưa đầy đủ, F8 vẫn đang nỗ lực hoàn thiện trong
        thời gian sớm nhất.
      </p>
      <div className='mt-45 mb-45 flex justify-between'>
        <div className='left'>
          <LearnPathItem />
          <div>
            <h2>Các khóa học tại F8</h2>
            <p className='lh-14 fz-16 fw-300 mt-10 mb-10 mw-50'>
              Các khóa học Pro được thiết kế đầy đủ chi tiết, bài bản. Với đa
              dạng các loại bài học và bài tập thực hành đi kèm, code luôn ở
              trang web. Cuối khóa học sẽ được thực hành từ 8 - 10 dự án thực
              chiến với cấp độ từ dễ đến khó.
            </p>
          </div>
        </div>
        <div className='right'>
          <img
            src='https://files.fullstack.edu.vn/f8-prod/banners/21/63db7cc59001b.png'
            alt='HTML CSS Pro Banner'
            title='HTML CSS Pro Banner'
            className='image-ads'
          />
          <img
            src='https://files.fullstack.edu.vn/f8-prod/banners/31/6421141abacbe.png'
            alt='F8 Youtube Banner'
            title='F8 Youtube Banner'
            className='image-ads'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default LearningPaths;
