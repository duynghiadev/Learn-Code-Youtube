import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { read } from "../../../../api/product";
import { ProductType } from "../../../../types/product";

type ProductDetailPageProps = {
  data: ProductType[]
};

const ProductDetailPage = (props: ProductDetailPageProps) => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType[]>([])
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProduct(data)
    }
    getProduct();
  }, []);
  return (
    <div>
      <section className="py-[117px]">
        <div className="container px-5">
          <div className="card-body">
            <div className="card-content">
              <div className="row">
                <div className="col-sm-4 col-12">
                  <div className="product-img d-flex align-items-center">
                    <div className="badge badge-success round">-50%</div>
                    <img
                      alt="Card image cap"
                      className="img-fluid mb-1"
                      src={product?.img}
                    />
                  </div>
                </div>
                <div className="pl-20 col-sm-8 col-12">
                  <div className="h-[250px]">
                    <div className="title-area clearfix">
                      <h2 className="product-title float-left text-3xl pb-4">
                        {product?.name}
                      </h2>
                    </div>
                    <div className="price-reviews clearfix">
                      <span className="price-box float-left ml-4 pb-2">
                        <span className="price h4 pb-2 my-2 text-red-600">
                          {product?.price}$
                        </span>
                        <br />
                        <span className="text-decoration-line-through old-price h4 my-4 text-blue-900">
                          {product?.price}$
                        </span>
                      </span>
                    </div>
                    {/* Product Information */}
                    <div className="product-info text-left">
                      <p>{product?.title}$</p>
                    </div>
                    <div className="product-info text-left"><br></br>
                      Danh mục sản phẩm
                      <p className="">{product?.category}$</p>
                    </div>
                    {/* Product Information Ends*/}
                    {/* Color Options */}
                  </div>
                  <div className="row py-8">
                    <div className="col-lg-6 flex">
                      <div className="product-options color-options mb-2">
                        <ul className="flex">
                          <li className="p-2">Color :</li>
                          <li className="p-2">
                            <a href="#">
                              <i
                                className="border  border-dark  fas fa-square"
                                style={{ color: "white" }}
                              ></i>
                            </a>
                          </li>
                          <li className="p-2">
                            <a href="#">
                              <i
                                className="fas fa-square"
                                style={{ color: "drack" }}
                              ></i>
                            </a>
                          </li>
                          <li className="p-2">
                            <a href="#">
                              <i
                                className="fas fa-square"
                                style={{ color: "red" }}
                              ></i>
                            </a>
                          </li>
                          <li className="p-2">
                            <a href="#">
                              <i
                                className="fas fa-square"
                                style={{ color: "gray" }}
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/* Size Options */}
                      <div className="product-options size-filter mb-3">
                        <ul className="flex">
                          <li className="option-title">Size :</li>
                          <li className="ml-2">
                            <a
                              className="p-1 border rounded bg-green-400"
                              href="#"
                            >
                              XL
                            </a>
                          </li>
                          <li className="ml-2">
                            <a
                              className="p-1 border rounded bg-gray-400"
                              href="#"
                            >
                              L
                            </a>
                          </li>
                          <li className="active ml-2">
                            <a
                              className="p-1 border rounded bg-red-400"
                              href="#"
                            >
                              M
                            </a>
                          </li>
                          <li className="ml-2">
                            <a className="p-1 border rounded bg-white" href="#">
                              S
                            </a>
                          </li>
                          <li className="ml-2">
                            <a
                              className="p-1 border rounded bg-pink-400"
                              href="#"
                            >
                              XS
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Color Options Ends*/}
                  {/* Size Options Ends*/}
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-1">
                      <div className="product-count pr-1">
                        <div className="input-group">
                          <input
                            className="text-center count touchspin border border-1 rounded"
                            type="number"
                            defaultValue={1}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-1">
                      <div className="options text-center d-flex justify-content-around">
                        <a
                          data-placement="top"
                          data-toggle="tooltip"
                          href="#like"
                          title="Yêu thích sản phẩm"
                        >
                          <i
                            className="fas fa-heart px-2"
                            style={{ color: "red" }}
                          />
                        </a>
                        <span className="saperator">|</span>
                        <a
                          data-placement="top"
                          data-toggle="tooltip"
                          href="#compare"
                          title="Compare"
                        >
                          <i
                            className="fas fa-cart-plus px-2"
                            style={{ color: "blue" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 mb-2">
                      <div className="product-buttons pl-2">
                        <button className="mx-2 btn btn-danger btn-sm">Add to Cart</button>
                        {/* <a
                          className="btn btn-info btn-sm"
                          href="ecommerce-checkout.html"
                        >
                          Buy Now
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
