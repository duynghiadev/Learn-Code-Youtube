import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {
  sendMessage,
  getMessages,
  addMessageSocket,
  readMessages,
} from '@/store/actions/message';
import { selectInfoMessages } from '@/store/selector/message';
import { selectUserInfo } from '@/store/selector/user';
import socketClient from '@/api/socketClient';
import { setLastMessage } from '@/store/actions/user';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 103px auto 60px;
  gap: 0.1rem;
  overflow: hidden;
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        position: relative;
        img {
          height: 3rem;
        }
        .dot-online {
          position: absolute;
          width: 12px;
          height: 12px;
          background: var(--web-success);
          border-radius: 50%;
          right: 0;
          bottom: 0;
          border: 1px solid var(--web-light);
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 8px 12px;
        font-size: 15px;
        border-radius: 1rem;
        line-height: 20px;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: var(--bg-reply);
        color: white;
      }
    }
    .received {
      justify-content: flex-start;
      .content {
        background-color: var(--bg-comment);
        color: white;
      }
    }
  }
`;

function ChatContainer(props) {
  const {
    currentChat,
    sendMessage,
    getMessages,
    addMessageSocket,
    infoMessages,
    onlineUsers,
    setLastMessage,
    user,
    readMessages,
  } = props;
  const [receivedMessage, setReceivedMessage] = useState(undefined);
  const scrollRef = useRef();

  const userOnline = onlineUsers.includes(currentChat._id);

  useEffect(() => {
    if (currentChat) {
      getMessages({ to: currentChat._id });
      readMessages({ from: user._id, to: currentChat._id });
    }
  }, [currentChat]);

  const handleSendMsg = message => {
    socketClient.emit('send-msg', {
      to: currentChat._id,
      message: message,
    });
    sendMessage({ from: user._id, to: currentChat._id, message });
    setLastMessage({ from: user._id, to: currentChat._id, message });
  };

  useEffect(() => {
    if (socketClient) {
      socketClient.on('msg-receive', msg => {
        setReceivedMessage(msg);
      });
    }
  }, []);

  useEffect(() => {
    if (receivedMessage) {
      addMessageSocket({
        from: user._id,
        to: currentChat._id,
        message: receivedMessage,
      });
      setLastMessage({
        from: currentChat._id,
        to: user._id,
        message: receivedMessage,
      });
    }
  }, [receivedMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }, [infoMessages?.messages]);

  return (
    <Container>
      <div className='chat-header'>
        <div className='user-details'>
          <div className='avatar'>
            <img
              src={currentChat.avatarImage}
              style={{
                objectFit: 'cover',
                height: 40,
                width: 40,
                borderRadius: 24,
              }}
              alt='avatar'
            />
            {userOnline && <div className='dot-online' />}
          </div>
          <div className='username'>
            <h3 className='fz-16'>{currentChat.fullName}</h3>
            <div className='fz-12' style={{ color: 'var(--secondary)' }}>
              {userOnline ? 'Đang hoạt động' : 'Không hoạt động'}
            </div>
          </div>
        </div>
      </div>
      <div className='chat-messages'>
        {infoMessages?.messages.map(message => {
          return (
            <div className='chat-message' ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? 'sended' : 'received'
                }`}
              >
                <div className='content'>
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} infoMessages={infoMessages} />
    </Container>
  );
}

const mapStateToProps = state => ({
  infoMessages: selectInfoMessages(state),
  user: selectUserInfo(state),
});

export default connect(mapStateToProps, {
  sendMessage,
  getMessages,
  addMessageSocket,
  setLastMessage,
  readMessages,
})(ChatContainer);
