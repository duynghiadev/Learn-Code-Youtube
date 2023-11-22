let cart: any[] = [];
export const increaseItemInCart = (id: any, next: () => void) => {
  cart.find((product) => product._id === id).quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  next();
};
