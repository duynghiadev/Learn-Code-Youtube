import React from "react";
import { Link } from "react-router-dom";
import { PostType } from "../types/post";
import { ProductType } from "../types/product";
import ManagerSlide from "./layouts/client/slides/ManagerSlide";

type HomeProps = {
  data: ProductType[],
  post : PostType[]
};

const Home = (props: HomeProps) => {
  return (
    <div className='d-flex flex-column h-100"'>
      <main className="flex-shrink-0">
        {/* Navigation*/}

        {/* Header*/}
        <ManagerSlide></ManagerSlide>
        
        {/* Features section*/}
        <hr className="mx-20" />
        <section className="py-5 bg-while bg-opacity-50" id="features">
          <div className="right-product-box">
            <div tabIndex={0} className="focus:outline-none">
              {/* Remove py-8 */}
              <h1 className="display-5 fw-bolder text-black mb-2">Product</h1>
              <div className="mx-auto container py-8">
                <div className="flex flex-wrap items-center lg:justify-between justify-center">
                  {/* Card 1 */}
                  {props.data && props.data.slice(1,5).map((product, index) => {
                    return (
                      <div key={index}
                        tabIndex={0}
                        className="h-100 shadow border-0 px-[10px] mb-4 pt-2 focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
                      >
                        <div>
                          <Link to={`product/${product._id}`}>
                            <img
                              alt="person capturing an image"
                              src={product.img}
                              tabIndex={0}
                              className="focus:outline-none w-full h-44"
                            />
                          </Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800">
                          <div className="p-4">
                            <Link to={`product/${product._id}`}>
                              <div className="flex items-center">
                                <h2
                                  tabIndex={0}
                                  className="focus:outline-none text-l dark:text-white font-semibold"
                                >
                                  {product.name}
                                </h2>
                              </div>
                              <p
                                tabIndex={0}
                                className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2"
                              >
                                {product.title}
                              </p>
                            </Link>
                            <div className="flex items-center justify-between pt-[2px]">
                              <div className="product-action d-flex justify-content-around">
                                <a
                                  href="#like"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Yêu thích sản phẩm"
                                >
                                  <i
                                    className="fas fa-heart px-2"
                                    style={{ color: "red" }}
                                  />
                                </a>
                                <span className="saperator">|</span>
                                <Link data-toggle="tooltip"
                                  data-placement="top"
                                  title="Xem chi tiết"
                                  to={`product/${product._id}`}><i className="fas fa-eye px-2" />
                                </Link>
                                <span className="saperator">|</span>
                                <a
                                  href="#cart"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Thêm vào giỏ hàng"
                                >
                                  <i
                                    className="fas fa-cart-plus px-2"
                                    style={{ color: "blue" }}
                                  />
                                </a>
                              </div>
                              <h3
                                tabIndex={0}
                                className="focus:outline-none text-indigo-700 text-xl font-semibold"
                              >
                                {product.price}$
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  {/* Card 1 */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="mx-20" />
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="text-center">
                  <h2 className="fw-bolder">From our blog</h2>
                  <p className="lead fw-normal text-muted mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque fugit ratione dicta mollitia. Officiis ad.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gx-5">
          {props.post && props.post.slice(1).map(post =>{
            return (
                <div className="col-lg-4 mb-5">
                  <div className="card h-100 shadow border-0">
                    <img className="card-img-top" src={post.img} alt="..." />
                    <div className="card-body p-4">
                      <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                        News
                      </div>
                      <Link className="text-decoration-none link-dark stretched-link" to={`post/${post._id}`}>
                        <h5 className="card-title mb-3">{post.title}</h5>
                      </Link>
                      <p className="card-text mb-0">{post.desc}</p>
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
            );
          })}</div>
            <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
              <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                <div className="mb-4 mb-xl-0">
                  <div className="fs-3 fw-bold text-white">
                    Đăng ký ngay để nhận thông báo từ chúng tôi.
                  </div>
                </div>
                <div className="ms-xl-4">
                  <div className="input-group mb-2">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email address..."
                      aria-label="Email address..."
                      aria-describedby="button-newsletter"
                    />
                    <button
                      className="btn btn-outline-light"
                      id="button-newsletter"
                      type="button"
                    >
                      Đăng ký
                    </button>
                  </div>
                  <div className="small text-white-50">
                    Chúng tôi quan tâm đến quyền riêng tư và sẽ không bao giờ
                    chia sẻ dữ liệu của bạn.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
