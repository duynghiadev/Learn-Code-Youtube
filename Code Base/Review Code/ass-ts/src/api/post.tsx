import { PostType } from "../types/post";
import instance from "./instance";

export const listPost = () => {
  const url = "/posts";
  return instance.get(url);
};
export const createPost = (post: PostType) => {
  const url = "/posts";
  return instance.post(url, post);
};
export const readPost = (id: number) => {
  const url = `/posts/${id}`;
  return instance.get(url);
};
export const removePost = (_id: PostType) => {
  const url = `/posts/${_id}`;
  return instance.delete(url);
};
export const updatePost = (post: PostType) => {
  const url = `/posts/${post._id}`;
  return instance.put(url, post);
};
