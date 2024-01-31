import { useDispatch } from "react-redux";

const initialValue = {
  cart: [],
  total: 0,
};

const rootReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "cart/add":
      const newProduct = { ...action.payload };
      const existProduct = state.cart.find((item) => item.id === newProduct.id);

      let newCart = [...state.cart];

      if (!existProduct) {
        newProduct.total = newProduct.quantity * newProduct.saleOffPrice;
        newCart = [...state.cart, newProduct];
      } else {
        existProduct.quantity += newProduct.quantity;
        existProduct.total += newProduct.quantity * newProduct.saleOffPrice;
      }

      console.log(newCart);
      return {
        cart: newCart,
        total: newCart.reduce((accu, item) => accu + item.total, 0),
      };

    case "cart/increase":
      const productIncreseId = action.payload;
      console.log(productIncreseId);

      const product = state.cart.find((item) => item.id === productIncreseId);
      console.log(product);

      product.quantity += 1;
      product.total += product.saleOffPrice;

      const cart = [...state.cart];

      return {
        ...state,
        cart: cart,
        total: cart.reduce((accu, item) => accu + item.total, 0),
      };

    case "cart/decrease":
      const productDecreseId = action.payload;

      const productt = state.cart.find((item) => item.id === productDecreseId);

      productt.quantity -= 1;
      let cartt;
      productt.total -= productt.saleOffPrice;
      if (productt.quantity < 1) {
        const delePR = state.cart.filter(
          (item) => item.id !== productDecreseId
        );
        cartt = [...delePR];
      } else {
        cartt = [...state.cart];
      }

      return {
        ...state,
        cart: cartt,
        total: cartt.reduce((accu, item) => accu + item.total, 0),
      };

    case "cart/delete":
      const productDeleteId = action.payload;

      const newC = state.cart.filter((item) => item.id !== productDeleteId);
      const carta = [...newC];
      return {
        ...state,
        cart: carta,
        total: carta.reduce((accu, item) => accu + item.total, 0),
      };

    default:
      return state;
  }
};

export default rootReducer;
