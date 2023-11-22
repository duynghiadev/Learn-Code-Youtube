import React, { useEffect, useState } from 'react'
import { listPost } from '../../../../api/post';
import { PostType } from '../../../../types/post';

type ManagerPostProps = {
  data : PostType[],
};

const ManagerPost = (props: ManagerPostProps) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
      const getPosts = async () => {
        const {data} = await listPost();
        setPosts(data);
      }
  })

  return (
    <div className="d-flex flex-column">
      <div className="flex-shrink-0">
        <section className="py-5">
          <div className="container px-5">
            <h1 className="fw-bolder fs-5 mb-4">Company Blog</h1>
            <div className="card border-0 shadow rounded-3 overflow-hidden">
              <div className="card-body p-0">
                <div className="row gx-0">
                  <div className="col-lg-6 col-xl-5 py-lg-5">
                    <div className="p-4 p-md-5">
                      <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                        News
                      </div>
                      <div className="h2 fw-bolder">
                        Article heading goes here
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique delectus ab doloremque, qui doloribus ea
                        officiis...
                      </p>
                      <a
                        className="stretched-link text-decoration-none"
                        href="#!"
                      >
                        Read more
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-7">
                    <img
                      src="https://designhooks.com/wp-content/uploads/2018/07/textile-fabric-banner-mockup2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-light">
          <div className="container px-5">
            <div className="row gx-5">
              <div className="col-xl-8">
                <h2 className="fw-bolder fs-5 mb-4">News</h2>
                {/* News item*/}
                <div className="mb-4">
                  <div className="small text-muted">May 12, 2021</div>
                  <a className="link-dark" href="#!">
                    <h3>
                      Start Bootstrap releases Bootstrap 5 updates for templates
                      and themes
                    </h3>
                  </a>
                </div>
                {/* News item*/}
                <div className="mb-5">
                  <div className="small text-muted">May 5, 2021</div>
                  <a className="link-dark" href="#!">
                    <h3>Bootstrap 5 has officially landed</h3>
                  </a>
                </div>
                {/* News item*/}
                <div className="mb-5">
                  <div className="small text-muted">Apr 21, 2021</div>
                  <a className="link-dark" href="#!">
                    <h3>
                      This is another news article headline, but this one is a
                      little bit longer
                    </h3>
                  </a>
                </div>
                <div className="text-end mb-5 mb-xl-0">
                  <a className="text-decoration-none" href="#!">
                    More news
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card border-0 h-100">
                  <div className="card-body p-4">
                    <div className="d-flex h-100 align-items-center justify-content-center">
                      <div className="text-center">
                        <div className="h6 fw-bolder">Contact</div>
                        <p className="text-muted mb-4">
                          For press inquiries, email us at
                          <br />
                          <a href="#!">press@domain.com</a>
                        </p>
                        <div className="h6 fw-bolder">Follow us</div>
                        <a className="fs-5 px-2 link-dark" href="#!">
                          <i className="bi-twitter" />
                        </a>
                        <a className="fs-5 px-2 link-dark" href="#!">
                          <i className="bi-facebook" />
                        </a>
                        <a className="fs-5 px-2 link-dark" href="#!">
                          <i className="bi-linkedin" />
                        </a>
                        <a className="fs-5 px-2 link-dark" href="#!">
                          <i className="bi-youtube" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog preview section*/}
        <section className="py-5">
          <div className="container px-5">
            <h2 className="fw-bolder fs-5 mb-4">Featured Stories</h2>
            <div className="row gx-5">
              {/* sdsadad */}
              {props.data &&
              props.data.map(post => {
                return (
                  <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <div className='text-center w-auto h-'>
                      <img
                        className="card-img-top"
                        src={post.img}
                        alt="..."
                      /></div>
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      News
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href={`/post/${post._id}`}
                    >
                      <div className="h5 card-title mb-3">{post.title}</div>
                    </a>
                    <p className="card-text mb-0">
                      {post.desc}
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle me-3"
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                        />
                        <div className="small">
                          <div className="fw-bold">Kelly Rowan</div>
                          <div className="text-muted">
                            March 12, 2021 · 6 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                )
              })}
              
              {/* sdasdada */}
            </div>
            <div className="text-end mb-5 mb-xl-0">
              <a className="text-decoration-none" href="#!">
                More stories
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManagerPost