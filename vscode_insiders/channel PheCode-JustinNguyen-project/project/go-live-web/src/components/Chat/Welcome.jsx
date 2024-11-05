import React from 'react';
import { connect } from 'react-redux';
import { selectUserInfo } from '@/store/selector/user';
import styled from 'styled-components';

import RobotHelloImage from '@/assets/images/robot-hello.gif';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white !important;
  flex-direction: column;
  width: 100%;
  img {
    height: 20rem;
  }
  span {
    color: var(--bg-reply);
  }
  h1,
  h3 {
    color: white !important;
  }
`;

function Welcome({ user }) {
  return (
    <Container>
      <img src={RobotHelloImage} alt='robot-hello' />
      <h1>
        Xin chào, <span>{user.fullName}!</span>
      </h1>
      <h3 className='fz-16'>
        Vui lòng chọn một tin nhắn để bắt đầu cuộc trò chuyện của bạn
      </h3>
    </Container>
  );
}

const mapStateToProps = state => ({
  user: selectUserInfo(state),
});

export default connect(mapStateToProps, null)(Welcome);
