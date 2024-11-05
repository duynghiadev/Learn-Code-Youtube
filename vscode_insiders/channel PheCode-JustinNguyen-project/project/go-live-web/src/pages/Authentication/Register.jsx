import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { register } from '@/store/actions/user';
import { selectAuthenticated } from '@/store/selector/user';
import routes from '@/configs/routes';
import AuthLayout from './AuthLayout';
import { toastMessage } from '@/utils/toast';

const registerInputSchema = yup
  .object({
    username: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email('Không đúng định dạng mail').required(),
    rePassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp')
      .required(),
  })
  .required();

function Register(props) {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(registerInputSchema),
  });

  const navigate = useNavigate();
  const { actions } = props;

  const handleRegister = data => {
    actions.register(data, () => navigate(routes.setAvatar.path));
  };

  const onSubmit = data => handleRegister(data);

  const onError = errors => {
    const error = Object.values(errors)[0];
    toastMessage('error', error.message);
  };

  return (
    <AuthLayout>
      <form className='auth-form' onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          className='auth-input'
          type='text'
          placeholder='Tên tài khoản'
          {...register('username')}
        />
        <input
          className='auth-input'
          type='text'
          placeholder='Tên của bạn'
          {...register('firstName')}
        />
        <input
          className='auth-input'
          type='text'
          placeholder='Họ của bạn'
          {...register('lastName')}
        />
        <input
          className='auth-input'
          type='text'
          placeholder='Email'
          {...register('email')}
        />
        <input
          className='auth-input'
          type='password'
          placeholder='Mật khẩu'
          {...register('password')}
        />
        <input
          className='auth-input'
          type='password'
          placeholder='Nhập lại mật khẩu'
          {...register('rePassword')}
        />

        <input type='submit' value='Đăng ký' />
      </form>
    </AuthLayout>
  );
}

const mapStateToProps = state => ({
  statusRegister: selectAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ register }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
