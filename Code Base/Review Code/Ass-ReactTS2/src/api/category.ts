import instance from "./instance";

export const list = () => {
  const url = `/categorys`;
  return instance.get(url);
};
export const add = (category: any) => {
  const url = `/categorys`;
  return instance.post(url, category);
};
export const remove = (id: number) => {
  const url = `/categorys/${id}`;
  return instance.delete(url);
};
export const read = (id: number) => {
  const url = `/categorys/${id}`;
  return instance.get(url);
};
