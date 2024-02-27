import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getChatUsers } from '@/store/actions/user';
import { selectContacts, selectOnlineUsers } from '@/store/selector/user';
import { Contacts, Welcome, ChatContainer } from '@/components/Chat';
import { selectUserInfo } from '@/store/selector/user';
import { bindActionCreators } from 'redux';
import socketClient from '@/api/socketClient';
import { useSearchParams } from 'react-router-dom';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: var(--web-light);
  .container {
    height: 100%;
    width: 100%;
    background-color: #00000076;
    display: flex;
  }
`;

function Chat(props) {
  const {
    actions,
    contacts: { users },
    user,
    onlineUsers,
  } = props;
  const socket = useRef();
  const [currentChat, setCurrentChat] = useState(undefined);
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get('username');

  useEffect(() => {
    socketClient.emit('add-user', user._id);
    actions.getChatUsers();
  }, []);

  useEffect(() => {
    if (users && username) {
      const user = users.find(user => user.username === username);
      setCurrentChat(user);
    }
  }, [users]);

  const handleChatChange = chat => {
    setSearchParams({ username: chat.username });
    setCurrentChat(chat);
  };

  return (
    <Container>
      <div className='container'>
        <Contacts
          contacts={users}
          changeChat={handleChatChange}
          user={user}
          getChatUsers={actions.getChatUsers}
          onlineUsers={onlineUsers}
          currentChat={currentChat}
        />
        {!currentChat ? (
          <Welcome />
        ) : (
          <ChatContainer
            currentChat={currentChat}
            socket={socket}
            onlineUsers={onlineUsers}
          />
        )}
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  contacts: selectContacts(state),
  user: selectUserInfo(state),
  onlineUsers: selectOnlineUsers(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getChatUsers }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
