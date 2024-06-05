import React, { useEffect, useState, useRef } from 'react';
import { Contacts, Welcome, ChatContainer } from '@/components/Chat';
import socketClient from '@/api/socketClient';
import { useSearchParams } from 'react-router-dom';
import { Container } from './Chat';

export function Chat(props) {
  const {
    actions,
    contacts: { users },
    user,
    onlineUsers,
  } = props;
  const socket = useRef();
  const [currentChat, setCurrentChat] = useState(undefined);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    socketClient.emit('add-user', user._id);
    actions.getChatUsers();
  }, []);

  const handleChatChange = chat => {
    setCurrentChat(chat);
  };

  return (
    <Container>
      <div className='container'>
        <Contacts
          contacts={users}
          changeChat={handleChatChange}
          user={user}
          onlineUsers={onlineUsers}
          getChatUsers={actions.getChatUsers}
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
