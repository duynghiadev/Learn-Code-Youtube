import React from "react";

type Props = {
  cart: [];
  total: 0;
};

const rootReducer = (props: Props, action: any) => {
  switch (action.type) {
    case "cart/add":
      const newCart = [...props.cart, action.payload];
      return {
        ...props,
        cart: newCart,
        total: newCart.reduce((accu, item) => accu + item.saleOffPrice, 0),
      };
  }
};
export default rootReducer;
