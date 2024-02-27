import React, { memo, useMemo, useState } from 'react';
import { Link, generatePath, useNavigate } from 'react-router-dom';
import { Popover } from 'antd';
import { debounce } from 'lodash';

import routes from '@/configs/routes';
import LogoImage from '@/assets/images/logo.png';
import LeftIcon from '@/assets/icons/left.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import searchApi from '@/api/searchApi';

const UserLoading = () => {
  return (
    <div
      style={{ width: 42, height: 42, borderRadius: 21 }}
      className='pulsate'
    />
  );
};

const SearchResultSkeleton = () => {
  return (
    <>
      <SearchResultItemSkeleton />
      <SearchResultItemSkeleton />
      <SearchResultItemSkeleton />
    </>
  );
};

const SearchResultItemSkeleton = () => {
  return (
    <>
      <div className='search-result-item'>
        <div
          style={{ width: 100, height: 20, margin: '8px 16px' }}
          className='pulsate'
        ></div>

        <div className='flex' style={{ gap: 12, margin: '8px 16px' }}>
          <div
            style={{ minWidth: 40, minHeight: 40 }}
            className='pulsate'
          ></div>
          <div style={{ width: '100%', height: 20 }} className='pulsate'></div>
        </div>
        <div className='flex' style={{ gap: 12, margin: '8px 16px' }}>
          <div
            style={{ minWidth: 40, minHeight: 40 }}
            className='pulsate'
          ></div>
          <div style={{ width: '100%', height: 20 }} className='pulsate'></div>
        </div>
      </div>
    </>
  );
};

const SearchResultItem = memo(({ data, title, setIsFocusSearch }) => {
  const navigate = useNavigate();

  if (data.length === 0) return;

  return (
    <div className='search-result-item'>
      <div
        className='font-bold text-base flex justify-between'
        style={{ padding: '8px 16px' }}
      >
        <span>{title}</span>{' '}
        <Link style={{ fontSize: 13, color: 'var(--web-subtext)' }}>
          Xem thêm
        </Link>
      </div>
      <div>
        {data.map(item => (
          <div
            onClick={() => {
              navigate(
                generatePath(routes.courseSlug.path, { slug: item.slug })
              );
              setIsFocusSearch(false);
            }}
            className='search-result-item-inner'
            key={item._id}
          >
            <img
              style={{ width: 40, height: 40, objectFit: 'cover' }}
              src={item.thumbnails?.default.url || item.thumbnail}
              alt={item.name || item.title}
            />
            {item.name || item.title}
          </div>
        ))}
      </div>
    </div>
  );
});

const SearchResult = ({ dataSearch, setIsFocusSearch }) => {
  const { courses = [], courseGroups = [], posts = [] } = dataSearch;
  return (
    <div className='search-result'>
      <SearchResultItem
        title='Khoá học'
        data={courses}
        setIsFocusSearch={setIsFocusSearch}
      />
      <SearchResultItem
        title='Nhóm khoá học'
        data={courseGroups}
        setIsFocusSearch={setIsFocusSearch}
      />
      <SearchResultItem
        title='Bài viết'
        data={posts}
        setIsFocusSearch={setIsFocusSearch}
      />
    </div>
  );
};

function Header(props) {
  const navigate = useNavigate();
  const { isGoBack, isLogin, userInfo, logout, userLoading } = props;
  const [search, setSearch] = useState('');
  const [requestingSearch, setRequestingSearch] = useState(false);
  const [isFocusSearch, setIsFocusSearch] = useState(false);
  const [dataSearch, setDataSearch] = useState({
    courses: [],
    courseGroups: [],
    posts: [],
  });

  const handleDebounceFn = async inputValue => {
    try {
      setRequestingSearch(true);
      const response = await searchApi.search({ keyword: inputValue });
      if (response.success) {
        setDataSearch(response.data);
      }
    } finally {
      setRequestingSearch(false);
    }
  };

  const debounceFn = useMemo(() => debounce(handleDebounceFn, 300), []);

  const handleChangeSearch = event => {
    setSearch(event.target.value);
    debounceFn(event.target.value);
  };

  const contentUser = (
    <div className='content-user'>
      <div className='content-user-wrapper'>
        <div
          className='action-item'
          onClick={() =>
            navigate(
              generatePath(routes.profile.path, { username: userInfo.username })
            )
          }
        >
          Quản lý thông tin
        </div>
        <div
          className='action-item'
          onClick={async () => {
            logout({ userId: userInfo._id });
            navigate(routes.login.path);
          }}
        >
          Đăng xuất
        </div>
      </div>
    </div>
  );

  return (
    <div className='header-layout'>
      <div className='header-layout-left'>
        <img
          className='logo'
          src={LogoImage}
          loading='auto'
          alt='logo'
          width={38}
          height={38}
          onClick={() => navigate(routes.home.path)}
        />
        <div
          className='title flex items-center'
          onClick={() =>
            (isGoBack && navigate(-1)) || navigate(routes.home.path)
          }
        >
          {(isGoBack && (
            <>
              <LeftIcon className='mr-2 fz-20' />
              QUAY LẠI
            </>
          )) ||
            'Học Lập Trình Mỗi Ngày'}
        </div>
      </div>

      <div
        className='header-layout-center'
        onFocus={() => setIsFocusSearch(true)}
        onBlur={e => {
          if (e.target.classList.contains('header-input-search')) return;
          setIsFocusSearch(false);
        }}
        tabIndex='-1'
      >
        <SearchIcon />
        <input
          type='text'
          placeholder='Tìm kiếm khoá học, bài viết, video,...'
          className='header-input-search'
          value={search}
          onChange={e => handleChangeSearch(e)}
        />
        {!!search && isFocusSearch && (
          <div className='header-search-result'>
            <div style={{ padding: '8px 16px', color: 'var(--web-subtext)' }}>
              <div className='flex items-center w-full' style={{ gap: 4 }}>
                {requestingSearch ? (
                  <>
                    <SearchIcon />
                    <span>Đang tìm kiếm kết quả {search}</span>
                  </>
                ) : (
                  <>
                    <SearchIcon />
                    <span>Kết quả tìm kiếm của {search}</span>
                  </>
                )}
              </div>
            </div>
            {requestingSearch ? (
              <SearchResultSkeleton />
            ) : (
              <SearchResult
                dataSearch={dataSearch}
                setIsFocusSearch={setIsFocusSearch}
              />
            )}
          </div>
        )}
      </div>

      <div className='header-layout-right'>
        {(userLoading && <UserLoading />) ||
          (!isLogin && (
            <div
              className='login-btn'
              onClick={() => navigate(routes.login.path)}
            >
              Đăng nhập
            </div>
          )) || (
            <Popover
              content={contentUser}
              trigger='click'
              placement='bottomLeft'
            >
              <img
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 21,
                  cursor: 'pointer',
                }}
                className='avatar'
                loading='auto'
                src={userInfo?.avatarImage}
                alt='avatar'
              />
            </Popover>
          )}
      </div>
    </div>
  );
}

export default memo(Header);
