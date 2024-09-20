import React, { Suspense, useEffect, useLayoutEffect, useRef } from 'react';
import { Outlet, useLocation, useMatches } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import {
  selectUserInfo,
  selectIsLogin,
  selectUserRequesting,
  selectOnlineUsers,
} from '@/store/selector/user';
import { logout, loadMe, setOnlineUsers } from '@/store/actions/user';
import { selectCourseIsRegistered } from '@/store/selector/course';
import routes from '@/configs/routes';
import HeaderCourse from './HeaderCourse';
import HeaderLayout from './HeaderLayout';
import NavigateLayout from './NavigateLayout';
import FallBack from '../Loading/FallBack';
import FooterLayout from './FooterLayout';
import socketClient from '@/api/socketClient';
import { setReadMessagesSocket } from '@/store/actions/message';

const ClientLayout = props => {
  const token = localStorage.getItem('jwt');
  const { actions, userInfo, isLogin, isRegistered, userLoading, onlineUsers } =
    props;
  const location = useLocation();
  const contentRef = useRef(null);

  const matches = useMatches();
  const routeActive = matches[matches.length - 1];

  // SEO Meta Tags
  const [key, { title }] = Object.entries(routes).find(([_, value]) => {
    return value.id === routeActive.id;
  });

  // Checking View
  const isViewLogin = routeActive.id === routes.login.id;
  const isViewRegister = routeActive.id === routes.register.id;
  const isViewProfile = routeActive.id === routes.profile.id;
  const isViewCourse = routeActive.id === routes.course.id;
  const isViewCourseSlug = routeActive.id === routes.courseSlug.id;
  const isViewSetAvatar = routeActive.id === routes.setAvatar.id;
  const isViewChat = routeActive.id === routes.chat.id;
  const isViewNewPost = routeActive.id === routes.newPost.id;
  const isViewBlog = routeActive.id === routes.blog.id;

  // Processing View
  const isViewCourseSlugRegistered = isViewCourseSlug && isRegistered;
  const isViewNotUseClientLayout =
    isViewLogin || isViewRegister || isViewSetAvatar;
  const isHiddenNavigate = isViewProfile || isViewCourseSlugRegistered;
  const isViewWaitUser = isViewBlog || isViewChat;
  const isGoBack = isViewProfile || isViewCourseSlug || isViewCourse;
  const isWidthFull = isViewCourseSlugRegistered || isViewProfile;
  const isNotFooter =
    isViewNotUseClientLayout ||
    isViewCourseSlug ||
    isWidthFull ||
    isViewChat ||
    isViewNewPost;

  const styleContent = {
    width: isWidthFull ? '100vw' : `calc(100vw - 96px)`,
    padding: isWidthFull ? '0px' : '30px 50px',
  };

  useEffect(() => {
    if (token && !isLogin) actions.loadMe();
  }, [token]);

  useEffect(() => {
    socketClient.on('online-users', users => {
      actions.setOnlineUsers(users);
    });

    socketClient.on('add-user', users => {
      actions.setOnlineUsers(users);
    });

    socketClient.on('remove-user', users => {
      actions.setOnlineUsers(users);
    });

    socketClient.on('read-msg', data => {
      actions.setReadMessagesSocket(data);
    });
  }, []);

  useLayoutEffect(() => {
    if (contentRef?.current) contentRef?.current.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <meta
          name='keywords'
          content={`${key}, go live, golive, Learn, Every Day, Study, Information Technology, Python, JavaScript, C++, C, C#, Java, HTML, CSS, SQL`}
        />
        <meta
          name='description'
          content='Learning information technology every day, manage course of myself and upgrade level'
        />

        <meta property='og:title' content={`Go Live | ${title}`} />
        <meta
          property='og:description'
          content='Learning information technology every day, manage course of myself and upgrade level'
        />
        <meta
          property='og:url'
          content={`https://golive.io.vn/${location.pathname}`}
        />
        <title>Go Live | {title}</title>
      </Helmet>
      {isViewNotUseClientLayout ? (
        <Suspense fallback={<FallBack />}>
          <Outlet isViewRegister={isViewRegister} />
        </Suspense>
      ) : (
        <div className='client-layout'>
          <header className='header'>
            {(isViewCourseSlugRegistered && <HeaderCourse />) || (
              <HeaderLayout
                isGoBack={isGoBack}
                isLogin={isLogin}
                userInfo={userInfo}
                logout={actions.logout}
                userLoading={userLoading}
              />
            )}
          </header>
          <main className='main'>
            {!isHiddenNavigate && <NavigateLayout />}
            <div
              className='content-client'
              style={styleContent}
              ref={contentRef}
            >
              <Suspense fallback={<FallBack />}>
                {(userLoading && isViewWaitUser && <FallBack />) || <Outlet />}
              </Suspense>
              {!isNotFooter && (
                <footer className='footer'>
                  <FooterLayout onlineUsers={onlineUsers} />
                </footer>
              )}
            </div>
          </main>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  userInfo: selectUserInfo(state),
  isLogin: selectIsLogin(state),
  isRegistered: selectCourseIsRegistered(state),
  userLoading: selectUserRequesting(state),
  onlineUsers: selectOnlineUsers(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { logout, loadMe, setOnlineUsers, setReadMessagesSocket },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientLayout);
