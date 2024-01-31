import React from "react";
import { useDispatch } from "react-redux";

type Props = {};

const product = (props: Props) => {
  const dispatch = useDispatch();
  const addTocart = (item: any) => {
    dispatch({
      type: "cart/add",
      payload: item,
    });
  };
  return (
    <div className="product-container">
      <h3>Product</h3>
      {props?.map((item) => (
        <div className="product-item" onClick={() => addToCart(item)}>
          <h4>{item.name}</h4>
          <div>{item.saleOffPrice}</div>
          <img style={{ width: "50%" }} src={item.image} />
        </div>
      ))}
    </div>
  );
};

export default product;
