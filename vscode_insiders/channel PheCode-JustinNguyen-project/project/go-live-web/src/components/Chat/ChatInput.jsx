import React, { useState } from 'react';
import styled from 'styled-components';
import Picker from 'emoji-picker-react';
import SendIcon from '@/assets/icons/send.svg?react';
import EmoijIcon from '@/assets/icons/emoij.svg?react';
import messageApi from '@/api/messageApi';
import socketClient from '@/api/socketClient';
export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleToggleEmoji = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = event => {
    let message = msg;
    message += event.emoji;
    setMsg(message);
  };

  const sendChat = event => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg('');
    }
  };

  const handleFocusInput = async _event => {
    await messageApi.read();
    socketClient.emit('read-msg', {});
  };

  return (
    <Container>
      <form className='flex' onSubmit={event => sendChat(event)}>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Aa'
            onChange={e => setMsg(e.target.value)}
            value={msg}
            onFocus={e => handleFocusInput(e)}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                sendChat(event);
              }
            }}
          />
          <div className='button-container'>
            <div className='emoji'>
              <div className='button-emoji' onClick={handleToggleEmoji}>
                <EmoijIcon />
              </div>
              {showEmojiPicker && (
                <Picker
                  onEmojiClick={handleEmojiClick}
                  theme='dark'
                  lazyLoadEmojis={true}
                  emojiStyle='google'
                />
              )}
            </div>
          </div>
        </div>
        <button type='submit'>
          <SendIcon />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  form {
    width: 100%;
    gap: 8px;

    .input-container {
      position: relative;
      width: 100%;
      height: 38px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      background-color: var(--bg-input-send);

      .button-container {
        position: absolute;
        right: 8px;
        display: flex;
        align-items: center;
        color: white;
        gap: 1rem;

        svg {
          font-size: 26px;
        }
        .emoji {
          position: relative;
          color: var(--bg-reply);
          .button-emoji {
            display: flex;
          }
          @keyframes show-emoji {
            from {
              opacity: 0;
              transform: translateY(20%);
            }
            to {
              opacity: 1;
              top: translateY(0);
            }
          }
          .epr-main {
            position: absolute;
            top: -480px;
            right: 0;
            background-color: var(--web-light);
            box-shadow: 0 1px 4px var(--web-highlight);
            border-color: var(--web-highlight);
            animation: show-emoji 0.2s linear;
            .epr-body::-webkit-scrollbar {
              width: 4px;
              &-thumb {
                background-color: var(--web-highlight);
              }
              &-track {
                box-shadow: unset;
              }
            }
            .epr-search {
              background-color: transparent;
              border-color: var(--web-highlight);
            }
            .emoji-group:before {
              background-color: #080420;
            }
          }
        }
      }

      input {
        background-color: transparent;
        color: var(--web-text);
        width: 100%;
        padding: 0 16px;
        font-size: 15px;
        &::selection {
          background-color: #9a86f3;
        }
        &:focus {
          outline: none;
        }
      }
    }
    button {
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      svg {
        font-size: 26px;
        color: var(--bg-reply);
      }
    }
  }
`;
