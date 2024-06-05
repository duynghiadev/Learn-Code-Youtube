import axiosClient from './axiosClient';

const messageApi = {
  send(params) {
    const url = '/message/addmsg';
    return axiosClient.post(url, params);
  },
  get(params) {
    const url = '/message/getmsg';
    return axiosClient.get(url, { params });
  },
  read(params) {
    const url = '/message/readmsg';
    return axiosClient.patch(url, params);
  },
};

export default messageApi;
