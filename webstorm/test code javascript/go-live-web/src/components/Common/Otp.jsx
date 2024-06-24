import React, { useState } from 'react';
import { Modal } from 'antd';
import InputOtp from './InputOtp';
import classNames from 'classnames/bind';
import styles from './style/Otp.module.scss';

const cx = classNames.bind(styles);

const Otp = ({ callback, visible, loading, params, onCancel }) => {
  const [codeOtp, setCodeOtp] = useState('');

  const handleOk = () => {
    callback({ ...params, codeOtp });
  };

  return (
    <Modal
      open={visible}
      title='Nhập mã OTP'
      okText='Xác nhận'
      cancelText='Quay lại'
      cancelButtonProps={{ size: 'large' }}
      okButtonProps={{ size: 'large' }}
      confirmLoading={loading}
      className={cx('wrapper')}
      width={300}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <InputOtp
        value={codeOtp}
        onChange={event => setCodeOtp(event.target.value)}
      />
    </Modal>
  );
};

export default Otp;
