import instance from "./instance";

export const getAll = () => {
  const url = "/products";
  return instance.get(url);
};

export const createPhone = (data: any) => {
  const url = "/products";
  return instance.post(url, data);
};
export const readPhone = (id: number) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const update = (product: any) => {
  const url = `/products/${product.id}`;
  return instance.put(url, product);
};
export const remove = (id: number) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};