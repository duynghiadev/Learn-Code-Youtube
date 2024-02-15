import { combineReducers } from "redux";
import { allProductsReducer, productReducer } from "./productReducer";

const reducer = combineReducers({
  allProducts: allProductsReducer,
  product: productReducer,
});

export default reducer;
