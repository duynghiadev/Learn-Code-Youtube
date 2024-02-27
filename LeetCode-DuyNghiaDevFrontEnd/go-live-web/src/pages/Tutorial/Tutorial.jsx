import React from 'react';
import TutorialItem from './components/TutorialItem';
import classNames from 'classnames/bind';
import styles from './style/Tutorial.module.scss';

const cx = classNames.bind(styles);

const dataDemo = [
  {
    title: 'Lộ trình học Front-end',
    content:
      'Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.',
    image:
      'https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png',
    pathBtn: '/learning-paths/front-end-development',
  },
  {
    title: 'Lộ trình học Back-end',
    content:
      'Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.',
    image:
      'https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png',
    pathBtn: '/learning-paths/back-end-development',
  },
];
const Tutorial = () => {
  return (
    <div className={cx('learning')}>
      <div className='mb-32'>
        <h1>Lộ trình học</h1>
        <p className='mt-20 lh-16'>
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
          Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn nên tập
          trung vào lộ trình "Front-end".
        </p>
      </div>
      <div className={cx('group-learning-paths')}>
        {dataDemo.map((item, index) => (
          <TutorialItem
            key={item._id || index}
            title={item?.title}
            content={item?.content}
            image={item?.image}
            pathBtn={item?.pathBtn}
          />
        ))}
      </div>

      <div className={cx('group-official')}>
        <div className={cx('group-official-content')}>
          <h2 className='mb-30'>
            Tham gia cộng đồng học viên Go Live trên Discord
          </h2>
          <p className='lh-14 fz-16 fw-300 mt-15 mb-15'>
            Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia
            hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
          </p>
          <button
            className={cx('btn')}
            onClick={() => window.open('https://discord.gg/PBv7bcJa', '_blank')}
          >
            Tham gia nhóm
          </button>
        </div>
        <img
          src='https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png'
          alt='go-live-learning-every-day'
        />
      </div>
    </div>
  );
};

export default Tutorial;
