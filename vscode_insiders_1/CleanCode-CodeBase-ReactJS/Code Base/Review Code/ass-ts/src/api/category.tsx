import { CategoryType } from "../types/category";
import instance from "./instance";

export const listCates = () => {
    const url = '/categorys';
    return instance.get(url);
}
export const createCates = (category: CategoryType) => {
  const url = "/categorys";
  return instance.post(url, category);
};
export const readCates = (id: number) => {
  const url = `/categorys/${id}`;
  return instance.get(url);
};
export const removeCates = (_id: CategoryType) => {
  const url = `/categorys/${_id}`;
  return instance.delete(url);
};
export const updateCates = ( category : CategoryType) => {
  const url =`/categorys/${category._id}`;
  return instance.put(url,category);
}