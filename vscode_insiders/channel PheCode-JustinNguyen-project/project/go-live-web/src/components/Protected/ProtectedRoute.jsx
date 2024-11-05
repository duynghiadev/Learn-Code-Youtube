import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import routes from '@/configs/routes';
import { selectIsLogin } from '@/store/selector/user';
import { connect } from 'react-redux';

function ProtectedRoute({
  redirectPath = routes.login.path,
  children,
  isLogin,
}) {
  const token = localStorage.getItem('jwt');
  const isAuthenticated = isLogin || token;

  if (!isAuthenticated) return <Navigate to={redirectPath} replace />;

  return children ? children : <Outlet />;
}

const mapStateToProps = state => ({ isLogin: selectIsLogin(state) });

export default connect(mapStateToProps, null)(ProtectedRoute);
