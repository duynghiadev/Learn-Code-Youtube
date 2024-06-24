import React from 'react';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '@/configs/routes';
import BackIcon from '@/assets/icons/circle_arrow_left.svg?react';
import Spinning from '@/components/Loading/Spinning';
import { selectUserRequesting } from '@/store/selector/user';
import AuthSocial from './components/AuthSocial';
import AuthBackground from './components/AuthBackground';

function AuthLayout(props) {
  const { children, requesting } = props;
  const isViewRegister = useMatch(routes.register.path);

  return (
    <Spinning spinning={requesting}>
      <div className='auth'>
        <div className='auth-wrapper'>
          <div className='auth-bg'>
            <AuthBackground />
          </div>
          <div className='auth-action'>
            <h1 className='auth-title'>GO | LEARN EVERY</h1>
            <AuthSocial />
            <div className='auth-or'>or use your email account</div>
            {children}
            <div className='auth-navigate'>
              <span>
                {isViewRegister
                  ? 'Bạn đã có tài khoản?'
                  : 'Bạn chưa có tài khoản?'}
              </span>
              <Link
                to={isViewRegister ? routes.login.path : routes.register.path}
              >
                {isViewRegister ? 'Đăng nhập' : 'Đăng ký'}
              </Link>
            </div>
            <div className='auth-back'>
              <Link to={routes.home.path}>
                <BackIcon className='icon' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Spinning>
  );
}

const mapStateToProps = state => ({
  requesting: selectUserRequesting(state),
});

export default connect(mapStateToProps, null)(AuthLayout);
