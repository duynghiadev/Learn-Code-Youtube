import axiosClient from './axiosClient';

const blogApi = {
  getAllBlog(page, limit) {
    const url = `/post?_page=${page}&_limit=${limit}`;
    return axiosClient.get(url);
  },
};

export default blogApi;
