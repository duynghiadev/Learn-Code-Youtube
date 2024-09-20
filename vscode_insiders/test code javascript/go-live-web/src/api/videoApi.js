import axiosClient from './axiosClient';

const videoApi = {
  getVideoById(id) {
    const url = `/video/${id}`;
    return axiosClient.get(url);
  },
  openVideo(id, params) {
    const url = `/video/${id}/open`;
    return axiosClient.post(url, params);
  },
};

export default videoApi;
