import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { login } from '@/store/actions/user';
import { selectAuthenticated } from '@/store/selector/user';
import routes from '@/configs/routes';
import AuthLayout from './AuthLayout';
import { toastMessage } from '@/utils/toast';

const loginInputSchema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function Login(props) {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginInputSchema),
  });

  const navigate = useNavigate();
  const { actions } = props;

  const handleLogin = async data => {
    actions.login(data, () => navigate(routes.home.path));
  };

  const onSubmit = data => handleLogin(data);

  const onError = errors => {
    const error = Object.values(errors)[0];
    toastMessage('error', error.message);
  };

  return (
    <AuthLayout>
      <form className='auth-form' onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          type='text'
          className='auth-input'
          placeholder='Email or Username'
          {...register('username')}
        />
        <input
          type='password'
          className='auth-input'
          placeholder='Password'
          {...register('password')}
        />
        <input type='submit' value='Đăng nhập' />
      </form>
    </AuthLayout>
  );
}

const mapStateToProps = state => ({
  statusLogin: selectAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ login }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
