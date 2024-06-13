import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout, getRegisteredCourses } from '@/store/actions/user';
import classNames from 'classnames/bind';

import ProfileContent from './components/ProfileContent';
import {
  selectUserCourses,
  selectUserCourseRequesting,
} from '@/store/selector/user';
import style from './style/Profile.module.scss';
import { useParams } from 'react-router-dom';
const cx = classNames.bind(style);

function Profile(props) {
  const { username } = useParams();
  const { actions, userCourses } = props;

  useEffect(() => {
    actions.getRegisteredCourses(username);
  }, [username]);

  return (
    <div className={cx('profile-container')}>
      <ProfileContent userCourses={userCourses} />
    </div>
  );
}

const mapStateToProps = state => ({
  userCourses: selectUserCourses(state),
  requesting: selectUserCourseRequesting(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ logout, getRegisteredCourses }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
