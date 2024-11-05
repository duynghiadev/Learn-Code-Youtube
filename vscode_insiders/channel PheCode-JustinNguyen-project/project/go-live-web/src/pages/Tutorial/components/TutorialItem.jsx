import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../style/TutorialItem.module.scss';

const cx = classNames.bind(styles);

const TutorialItem = props => {
  const navigate = useNavigate();
  const { title, content, image, pathBtn } = props;
  return (
    <div className={cx('tutorial-item')}>
      <div>
        <h2>{title}</h2>
        <p className='lh-14 fz-16 fw-300 mt-15 mb-15'>{content}</p>
        <button
          className={cx('btn', 'fz-16')}
          onClick={() => navigate(pathBtn)}
        >
          Xem chi tiết
        </button>
      </div>
      <div className={cx('tutorial-item-image')}>
        <img
          src={image}
          alt='learning-path'
          title='learning-path'
          loading='auto'
        />
      </div>
    </div>
  );
};

export default TutorialItem;
