import React, { useMemo, useState } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';

import LogoImage from '@/assets/images/logo.png';
import SearchIcon from '@/assets/icons/search.svg?react';

const Container = styled.div`
  min-width: 360px;
  width: 360px;
  display: grid;
  grid-template-rows: 103px auto;
  overflow: hidden;
  background-color: var(--web-light);

  .chat-header {
    padding: 12px 16px 0;
    .search {
      margin-top: 12px;
      background-color: var(--web-input);
      display: flex;
      align-items: center;
      border-radius: 20px;
      span {
        display: flex;
        align-items: center;

        margin-left: 12px;
      }
      input {
        font-size: 14px;
        padding: 10px 8px;
        width: 100%;
      }
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    padding: 12px;

    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      cursor: pointer;
      width: 100%;
      border-radius: 8px;
      padding: 10px 16px;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.2s ease-in-out;
      &:hover {
        background-color: #ffffff34;
      }
      .avatar {
        position: relative;

        img {
          height: 56px;
          width: 56px;
          border-radius: 50%;
          object-fit: cover;
        }

        .dot-online {
          position: absolute;
          width: 18px;
          height: 18px;
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

    .selected {
      background-color: var(--web-light-selected);
    }
  }
  @media (max-width: 900px) {
    min-width: 90px;
    width: 90px;
    .contacts {
      padding: 8px;
      .contact {
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;

        .username {
          display: none;
        }
      }
    }
    .brand {
      .title {
        display: none;
      }
    }
  }
`;

function Contacts({
  contacts,
  changeChat,
  onlineUsers,
  user,
  getChatUsers,
  currentChat,
}) {
  const [search, setSearch] = useState('');

  const handleSearchDebounceFn = async inputValue => {
    await getChatUsers({ keyword: inputValue });
  };

  const searchDebounceFn = useMemo(
    () => debounce(handleSearchDebounceFn, 350),
    []
  );

  const handleSearchUser = event => {
    setSearch(event.target.value);
    searchDebounceFn(event.target.value);
  };

  return (
    <>
      <Container>
        <header className='chat-header'>
          <div>
            <h1>Hội thoại</h1>
          </div>
          <div className='search'>
            <span>
              <SearchIcon />
            </span>
            <input
              type='text'
              placeholder='Tìm kiếm...'
              value={search}
              onChange={event => handleSearchUser(event)}
            />
          </div>
        </header>
        <div className='contacts'>
          {contacts.map(contact => {
            const fullName = `${contact.lastName} ${contact.firstName}`;
            const userOnline = onlineUsers?.includes(contact._id);
            const lastMessage = contact.lastMessage;
            const isRead = !!lastMessage?.readers.includes(user._id);
            return (
              <div
                key={contact._id}
                className={`contact ${
                  currentChat && contact._id === currentChat._id
                    ? 'selected'
                    : ''
                }`}
                onClick={() => changeChat(contact)}
              >
                <div className='avatar'>
                  <img
                    src={contact.avatarImage || LogoImage}
                    alt='avatar-contact'
                  />
                  {userOnline && <div className='dot-online' />}
                </div>
                <div className='username' style={{ lineHeight: 1.6 }}>
                  <h3 className='fz-14'>{fullName}</h3>
                  <div
                    className={`fz-12 ${
                      lastMessage && !isRead ? 'fw-500 color-primary' : ''
                    }`}
                    style={{ color: 'var(--secondary)' }}
                  >
                    {lastMessage && lastMessage.sender === user._id && (
                      <span>Bạn: </span>
                    )}
                    <span>
                      {!lastMessage
                        ? 'Bắt đầu cuộc trò chuyện'
                        : lastMessage?.message?.text}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default Contacts;
