import { GET_ALL_BLOG } from '@/store/constants/blog';

const getAllBlog = payload => {
  return {
    type: GET_ALL_BLOG,
    payload,
  };
};

export { getAllBlog };
