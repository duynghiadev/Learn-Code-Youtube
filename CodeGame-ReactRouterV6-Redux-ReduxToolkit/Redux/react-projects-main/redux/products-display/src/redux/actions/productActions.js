import axios from "axios";
import { ACTION_TYPES } from "../constants/actionTypes";

// export const fetchAllProducts = async () => {
//   const { data } = await axios.get("https://fakestoreapi.com/products");
//   return {
//     type: ACTION_TYPES.FETCH_ALL_PRODUCTS,
//     payload: data,
//   };
// };

// async action creator
export const fetchAllProducts = () => {
  return async (dispatch) => {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch(setAllProducts(res.data));
  };
};

export const setAllProducts = (products) => {
  return {
    type: ACTION_TYPES.SET_ALL_PRODUCTS,
    payload: products,
  };
};

export const setCurrentProduct = (product) => ({
  type: ACTION_TYPES.SET_CURRENT_PRODUCT,
  payload: product,
});

// async action creator
export const fetchCurrentProduct = (productId) => {
  return async (dispatch) => {
    const { data: product } = await axios.get(
      "https://fakestoreapi.com/products/" + productId
    );
    dispatch(setCurrentProduct(product));
  };
};

export const removeCurrentProduct = () => {
  return {
    type: ACTION_TYPES.REMOVE_CURRENT_PRODUCT,
  };
};
