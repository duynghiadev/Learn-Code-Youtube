import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cart, total } = useSelector((store) => store);
  console.log(total);

  const dipatch = useDispatch();

  return (
    <div className="cart-container">
      <h3 className="mt-4">Cart</h3>
      {cart?.map((item) => {
        console.log(item.quantity);
        return (
          <div className="card rounded-3 mb-4" key={item.id}>
            <div className="card-body p-4">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={item.image}
                    className="img-fluid rounded-3"
                    alt="Cotton T-shirt"
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">{item.name}</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                  <button
                    className="btn btn-link px-2"
                    onClick={() => {
                      dipatch({
                        type: "cart/increase",
                        payload: item.id,
                      });
                    }}
                  >
                    <i className="bi bi-arrow-up-square-fill"></i>
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="btn btn-link px-2"
                    onClick={() => {
                      dipatch({
                        type: "cart/decrease",
                        payload: item.id,
                      });
                    }}
                  >
                    <i className="bi bi-arrow-down-square-fill"></i>
                  </button>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">{item.total} vnđ</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <button
                    href="#!"
                    className="text-danger"
                    onClick={() => {
                      dipatch({
                        type: "cart/delete",
                        payload: item.id,
                      });
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="total d-flex justify-content-between aligns-center">
        <div>Tổng giá trị đơn hàng </div>
        <h2>{total} vnđ</h2>
      </div>
    </div>
  );
};

export default Cart;
