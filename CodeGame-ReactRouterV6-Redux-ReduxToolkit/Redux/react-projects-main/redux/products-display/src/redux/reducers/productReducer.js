import { ACTION_TYPES } from "../constants/actionTypes";

const initialState = { products: [] };

export const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ALL_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const productReducer = (state = { currentProduct: null }, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_PRODUCT:
      return { ...state, currentProduct: action.payload };
    case ACTION_TYPES.REMOVE_CURRENT_PRODUCT:
      return { ...state, currentProduct: null };
    default:
      return state;
  }
};
