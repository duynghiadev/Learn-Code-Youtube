# Getting Started with Create React App

###

```
export const fetchAllProducts = async () => {
const { data } = await axios.get("https://fakestoreapi.com/products");
return {
  type: ACTION_TYPES.FETCH_ALL_PRODUCTS,
  payload: data,
};

 };
```

```
export const fetchAllProductsWithThunk = () => {
  return async (dispatch) => {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch(setAllProducts(res.data));
  };
 };
```
