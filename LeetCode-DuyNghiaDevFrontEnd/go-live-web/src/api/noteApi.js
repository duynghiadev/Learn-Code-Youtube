import axiosClient from './axiosClient';

const noteApi = {
  getNote(params) {
    const url = '/note';
    return axiosClient.get(url, { params });
  },
  createNote(params) {
    const url = '/note';
    return axiosClient.post(url, params);
  },
};

export default noteApi;
