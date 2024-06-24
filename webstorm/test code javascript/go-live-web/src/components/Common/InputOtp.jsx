import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style/Otp.module.scss';

const cx = classNames.bind(styles);

const { useState, useRef, useEffect } = React;

const propTypes = {
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  size: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
  classNameItem: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleItem: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
const defaultProps = {
  autoFocus: true,
  value: '0000',
  maxLength: 4,
  size: 40,
};

function SnyInputOtp(props) {
  const {
    value = '',
    maxLength,
    autoFocus,
    onChange,
    className,
    classNameItem,
    style,
    styleItem,
  } = props;
  const codeDigitsArray = new Array(maxLength).fill(0);
  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(
    autoFocus || false
  );
  const textInputRef = useRef(null);

  useEffect(() => {
    autoFocus && handleOnPress();
  }, []);

  const handleOnPress = () => {
    textInputRef?.current?.focus();
  };
  const handleOnBlur = () => {
    setInputContainerIsFocused(false);
  };

  const handleOnFocus = () => {
    setInputContainerIsFocused(true);
  };

  const toCodeDigitInput = (_value, index) => {
    const emptyInputChar = ' ';
    const digit = value[index] || emptyInputChar;
    const isCurrentDigit = index === value.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = value.length === maxLength;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);
    const styleOtpInput = inputContainerIsFocused && isDigitFocused;

    return (
      <div
        key={index}
        className={cx('flex items-center justify-center', classNameItem, {
          'otp-input-focused': styleOtpInput,
          'otp-input': !styleOtpInput,
        })}
        style={styleItem}
      >
        <div>{digit}</div>
      </div>
    );
  };

  return (
    <div className={cx('input-otp')}>
      <div
        onClick={handleOnPress}
        className={cx('input-otp-container', className)}
        style={style}
      >
        {codeDigitsArray.map(toCodeDigitInput)}
      </div>
      <input
        className={cx('input-otp-hidden')}
        {...props}
        ref={textInputRef}
        value={value}
        onChange={onChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        maxLength={maxLength}
      />
    </div>
  );
}

SnyInputOtp.propTypes = propTypes;
SnyInputOtp.defaultProps = defaultProps;

export default SnyInputOtp;
