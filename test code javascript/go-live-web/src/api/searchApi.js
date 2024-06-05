import axiosClient from './axiosClient';

const searchApi = {
  search(params) {
    console.log(params);
    const url = '/search';
    return axiosClient.get(url, { params });
  },
};

export default searchApi;
