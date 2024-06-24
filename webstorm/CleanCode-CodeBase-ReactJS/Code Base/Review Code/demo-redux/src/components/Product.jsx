import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    item.quantity = 1;
    dispatch({
      type: "cart/add",
      payload: item,
    });
  };
  return (
    <>
      <h3 className="mb-5">Product List</h3>
      <div className="d-flex">
        {product?.map((item) => (
          <div
            className="card mx-2 p-3 d-flex justify-content-center w-25"
            key={item.id}
          >
            <div>
              <img
                className="card-img-top"
                src={item.image}
                alt="Card image cap"
                style={{ width: "120px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6>
                <span>{item.saleOffPrice}</span> VND
              </h6>
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => addToCart(item)}
              >
                Add To Card
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
