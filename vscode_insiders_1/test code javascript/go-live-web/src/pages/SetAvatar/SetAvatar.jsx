import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from '@/store/actions/user';
import { selectAuthenticated } from '@/store/selector/user';
import { useNavigate } from 'react-router-dom';
import routes from '@/configs/routes';
import Loading from '@/components/Loading/Loading';
import avatarApi from '@/api/avatarApi';

function SetAvatar(props) {
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const { actions } = props;

  useEffect(() => {
    async function fetchData() {
      const data = await avatarApi.getAvatars();
      setAvatars(data.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const setProfilePicture = () => {
    actions.updateUser(
      {
        avatarImage: avatars[selectedAvatar],
      },
      () => navigate(routes.home.path)
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <div className='title-container'>
            <h1>Chọn ảnh đại diện cho bạn</h1>
          </div>
          <div className='avatars'>
            {avatars.map((avatar, index) => {
              return (
                <div
                  key={index}
                  className={`avatar ${
                    selectedAvatar === index ? 'selected' : ''
                  }`}
                >
                  <img
                    src={avatar}
                    alt='avatar'
                    key={avatar}
                    loading='lazy'
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={setProfilePicture} className='submit-btn'>
            Cặt đặt ảnh đại diện
          </button>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: var(--web-bg);
  height: 100vh;
  width: 100vw;
  .loader {
    max-inline-size: 100%;
  }
  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;
    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
        transition: 0.5s ease-in-out;
      }
    }
    .selected {
      border: 0.4rem solid var(--web-highlight);
    }
  }
  .submit-btn {
    background-color: var(--web-active);
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: var(--web-highlight);
    }
  }
`;

const mapStateToProps = state => ({
  user: selectAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateUser }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetAvatar);
