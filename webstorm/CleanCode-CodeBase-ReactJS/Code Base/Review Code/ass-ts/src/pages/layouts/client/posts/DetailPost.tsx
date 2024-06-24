import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { readPost } from '../../../../api/post';
import { PostType } from '../../../../types/post';

type DetailPostProps = {
  data : PostType[],
};

const DetailPost = (props: DetailPostProps) => {
  const {id} = useParams();
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() =>{
    const getPost = async () => {
      const {data : post} = await readPost(id);
      setPosts(post);
    }
    getPost();
  },[])
  return (
    <div className="d-flex flex-column">
      <div className="flex-shrink-0">
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-3">
                <div className="d-flex align-items-center mt-lg-5 mb-4">
                  <img
                    className="img-fluid rounded-circle"
                    src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                    alt="..."
                  />
                  <div className="ms-3">
                    <div className="fw-bold text-left">Valerie Luna</div>
                    <div className="text-muted">News, Business</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                {/* Post content*/}
                <article>
                  {/* Post header*/}
                  <header className="mb-4">
                    {/* Post title*/}
                    <h1 className="fw-bold text-lefter mb-1">Welcome to Blog Post!</h1>
                    {/* Post meta content*/}
                    <div className="text-muted fst-italic mb-2">
                      January 1, 2021
                    </div>
                    {/* Post categories*/}
                    <a
                      className="badge bg-secondary text-decoration-none link-light"
                      href="#!"
                    >
                      Web Design
                    </a>
                    <a
                      className="badge bg-secondary text-decoration-none link-light"
                      href="#!"
                    >
                      Freebies
                    </a>
                  </header>
                  {/* Preview image figure*/}
                  <figure className="mb-4 h-[400px] w-[900px]">
                    <img
                      className="img-fluid rounded"
                      src={posts.img}
                      alt="..."
                    />
                  </figure>
                  {/* Post content*/}
                  <section className="mb-5 w-[900px]">
                    <h2 className="fw-bold text-lefter mb-4 mt-5 text-left fs-2">
                      {posts.title}
                    </h2>
                    <p className="fs-5 mb-4">
                      {posts.desc}
                    </p>
                    {/* <p className="fs-5 mb-4">
                      Venus has a runaway greenhouse effect. I kind of want to
                      know what happened there because we're twirling knobs here
                      on Earth without knowing the consequences of it. Mars once
                      had running water. It's bone dry today. Something bad
                      happened there as well.
                    </p> */}
                  </section>
                </article>
                {/* Comments section*/}
                <section className='w-[900px]'>
                  <div className="card bg-light">
                    <div className="card-body">
                      {/* Comment form*/}
                      <form className="mb-4">
                        <textarea
                          className="form-control"
                          rows={3}
                          placeholder="Join the discussion and leave a comment!"
                          defaultValue={""}
                        />
                      </form>
                      {/* Comment with nested comments*/}
                      <div className="d-flex mb-4">
                        {/* Parent comment*/}
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="ms-3">
                          <div className="fw-bold text-left">Commenter Name</div>
                          If you're going to lead a space frontier, it has to be
                          government; it'll never be private enterprise. Because
                          the space frontier is dangerous, and it's expensive,
                          and it has unquantified risks.
                          {/* Child comment 1*/}
                          <div className="d-flex mt-4">
                            <div className="flex-shrink-0">
                              <img
                                className="rounded-circle"
                                src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                alt="..."
                              />
                            </div>
                            <div className="ms-3">
                              <div className="fw-bold text-left">Commenter Name</div>
                              And under those conditions, you cannot establish a
                              capital-market evaluation of that enterprise. You
                              can't get investors.
                            </div>
                          </div>
                          {/* Child comment 2*/}
                          <div className="d-flex mt-4">
                            <div className="flex-shrink-0">
                              <img
                                className="rounded-circle"
                                src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                alt="..."
                              />
                            </div>
                            <div className="ms-3">
                              <div className="fw-bold text-left">Commenter Name</div>
                              When you put money directly to a problem, it makes
                              a good headline.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single comment*/}
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="ms-3">
                          <div className="fw-bold text-left">Commenter Name</div>
                          When I look at the universe and all the ways the
                          universe wants to kill us, I find it hard to reconcile
                          that with statements of beneficence.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailPost