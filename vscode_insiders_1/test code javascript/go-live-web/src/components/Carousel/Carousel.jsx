import React, { useRef } from 'react';
import { Carousel as CarouselAntd } from 'antd';
import { Link } from 'react-router-dom';
import Image1 from '@/assets/images/carousel1.svg?react';
import Image2 from '@/assets/images/carousel2.svg?react';
import Image3 from '@/assets/images/carousel3.svg?react';
import Image4 from '@/assets/images/carousel4.svg?react';
import Image5 from '@/assets/images/carousel5.svg?react';
import RightIcon from '@/assets/icons/right.svg?react';
import LeftIcon from '@/assets/icons/left.svg?react';
import './style/carousel.scss';

const data = [
  {
    title: 'Quản lý khoá học',
    description:
      'Quản lý khoá học của bạn dễ hơn bao giờ hết với Go Live | Every Day',
    link: 'https://linktr.ee/vuluu2k',
    image: Image1,
  },
  {
    title: 'Học công nghệ miễn phí',
    description:
      'Các công nghệ, bài học được đội ngữ Admin lựa chọn sao cho phù hợp mới mức độ và trình đô đưa ra dựa trên sự xem xét đánh giá của các bạn.',
    link: 'https://linktr.ee/vuluu2k',
    image: Image2,
  },
  {
    title: 'Tạo tủ sách lập trình',
    description:
      'Tự tạo cho mình những tủ sách lập trình phù hợp nhất và tốt nhất cho mình.',
    link: 'https://linktr.ee/vuluu2k',
    image: Image3,
  },
  {
    title: 'Chia sẻ tủ sách',
    description:
      'Go Live cho phép người dùng tải xuống tệp file tủ sách và gửi tới bạn bè của bạn cùng nhau.',
    link: 'https://linktr.ee/vuluu2k',
    image: Image4,
  },
  {
    title: 'Mở lớp học Online',
    description:
      'Go Live Mang đến cho bạn một lớp học thú vị tuỳ vào thời gian theo chuẩn dứ án thực tế hoàn toàn miễn phí.',
    link: 'https://linktr.ee/vuluu2k',
    image: Image5,
  },
];

function Carousel() {
  const carouselRef = useRef();
  const onNext = () => carouselRef.current.next();
  const onPrev = () => carouselRef.current.prev();

  return (
    <div className='carousel-container'>
      <CarouselAntd
        className='carousel-custom'
        autoplay={true}
        ref={carouselRef}
      >
        {data.map((item, index) => {
          const ImageComponent = item.image;
          return (
            <div key={index}>
              <div className={`carousel-item item-${index}`}>
                <div className='left'>
                  <h1 className='title'>
                    <Link target='_blank' to={item.link} aria-hidden='true'>
                      {item.title}
                    </Link>
                  </h1>
                  <p className='description'>{item.description}</p>
                  <div className='redirect-btn'>
                    <Link target='_blank' to={item.link} aria-hidden='true'>
                      Ủng hộ tác giả
                    </Link>
                  </div>
                </div>
                <div className='right'>
                  <Link
                    target='_blank'
                    to={item.link}
                    style={{ padding: '0px 24px' }}
                    aria-hidden='true'
                  >
                    <ImageComponent style={{ width: '100%', height: '100%' }} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </CarouselAntd>
      <button className='carousel-action right' onClick={onNext}>
        <RightIcon className='icon' />
      </button>
      <button className='carousel-action left' onClick={onPrev}>
        <LeftIcon className='icon' />
      </button>
    </div>
  );
}

export default Carousel;
