import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, generatePath, useNavigate } from 'react-router-dom';

import { selectBlogs } from '@/store/selector/blog';
import { getAllBlog } from '@/store/actions/blog';
import { calculateDate } from '@/utils/caculatedDate';
import routes from '@/configs/routes';
import SaveIcon from '@/assets/icons/save_icon.svg?react';
import SavedIcon from '@/assets/icons/saved_icon.svg?react';
import OptionIcon from '@/assets/icons/three_dot.svg?react';
import Earth from '@/assets/icons/earth.svg?react';

import styles from './style/Blog.module.scss';
const cx = classNames.bind(styles);

function Blog(props) {
  const [isSave, setIsSave] = useState({});
  const { actions, blogs } = props;

  const navigate = useNavigate();

  useEffect(() => {
    actions.getAllBlog({ page: 1, limit: 10 });
  }, []);

  const { data: blogArr } = blogs;

  console.log(blogArr);

  useEffect(() => {
    blogArr?.reduce((acc, blog) => {
      acc[blog._id] = blog.isSaved;
      return acc;
    }, {});
  }, []);

  const handleNavigatePostDetail = slug => {
    navigate(generatePath(routes.postDetail.path, { slug }));
  };

  const handleSavePost = id => {
    setIsSave(prev => ({
      ...prev,
      [id]: !prev[id] || false,
    }));
  };

  return (
    <div className={cx('blog-wrapper')}>
      <section className={cx('blog-container')}>
        <div className={cx('blog-content')}>
          <div className={cx('blog-main')}>
            <div className={cx('blog-main-content')}>
              {blogArr?.map(blog => {
                return (
                  <div className={cx('content-item')} key={blog._id}>
                    <div className={cx('recommend')}>
                      <div className={cx('recommend-content')}>
                        <span>Gợi ý cho bạn</span>
                      </div>
                    </div>
                    <div className={cx('head-item')}>
                      <div className={cx('head-item-content')}>
                        <div className={cx('avatar')}>
                          <span className={cx('avatar-content')}>
                            <Link
                              to={generatePath(routes.profile.path, {
                                username: blog.author.username,
                              })}
                            >
                              <div className={cx('avatar-img')}>
                                <img
                                  className={cx('avatar-img-link')}
                                  src={blog.author.avatarImage}
                                  alt='avt'
                                />
                              </div>
                            </Link>
                          </span>
                        </div>
                        <div className={cx('author-info')}>
                          <div className={cx('author-info-content')}>
                            <div
                              className={cx('author-name')}
                              onClick={() =>
                                navigate(
                                  generatePath(routes.profile.path, {
                                    username: blog.author.username,
                                  })
                                )
                              }
                            >
                              <h4>{blog.author.fullName}</h4>
                            </div>
                            <div className={cx('time-post')}>
                              <span className={cx('time-post-content')}>
                                <span>
                                  <span>{calculateDate(blog.createdAt)}</span>
                                  <span>.</span>
                                  <span>
                                    <Earth />
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {!isSave[blog._id] ? (
                          <div
                            className={cx('save-post')}
                            onClick={() => handleSavePost(blog._id)}
                          >
                            <SaveIcon />
                          </div>
                        ) : (
                          <div
                            className={cx('saved-post')}
                            onClick={() => handleSavePost(blog._id)}
                          >
                            <SavedIcon />
                          </div>
                        )}
                        <div className={cx('option')}>
                          <OptionIcon />
                        </div>
                      </div>
                    </div>
                    <div
                      className={cx('main-item')}
                      onClick={() => handleNavigatePostDetail(blog.slug)}
                    >
                      <div className={cx('main-content')}>
                        <div className={cx('content-container')}>
                          <div className={cx('content-detail')}>
                            <div className='mb-8'>
                              <h3>{blog.title}</h3>
                            </div>
                            <p
                              className={cx('content-detail-description')}
                              dangerouslySetInnerHTML={{ __html: blog.content }}
                            ></p>
                          </div>
                        </div>
                      </div>
                      <div className={cx('thumb')}>
                        <Link className={cx('thumb-link')} to=''>
                          <div className={cx('thumb-img')}>
                            <div className={cx('thumb-img-content')}>
                              <img
                                className={cx('thumb-img-link')}
                                src={blog.thumbnail}
                                alt='thumb-img'
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className={cx('post-item')}>
                        <div className={cx('post-item-sub-info')}>
                          {blog?.tags.map((tag, i) => (
                            <Link key={i} className={cx('post-tag')} to=''>
                              {tag}
                            </Link>
                          ))}

                          <span className={cx('time-to-read')}>8 phút đọc</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={cx('blog-right')}>
              <div className={cx('topics-list-wrapper')}>
                <h3>Các chủ đề được đề xuất</h3>
                <ul className={cx('topics-list')}>
                  <li>
                    <Link to=''>Front-end/ Mobile apps</Link>
                  </li>
                  <li>
                    <Link to=''>Back-end/ Devops</Link>
                  </li>
                  <li>
                    <Link to=''>UI/ UX/ Design</Link>
                  </li>
                  <li>
                    <Link to=''>Others</Link>
                  </li>
                </ul>
              </div>
              {/* <div className={cx('banner-wrapper')}>
                <div className={cx('banner-content')}>
                  <Link className={cx('banner-link')} to=''>
                    <img
                      className={cx('banner-img')}
                      src='https://files.fullstack.edu.vn/f8-prod/banners/26/63dc61f2a061e.png'
                      alt='banner'
                    />
                  </Link>
                  <Link className={cx('banner-link')} to=''>
                    <img
                      className={cx('banner-img')}
                      src='https://files.fullstack.edu.vn/f8-prod/banners/26/63dc61f2a061e.png'
                      alt='banner'
                    />
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  blogs: selectBlogs(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllBlog }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
