import axiosClient from './axiosClient';

const avatarApi = {
  getAvatars(params) {
    const url = '/avatar/random';
    return axiosClient.get(url, { params });
  },
};

export default avatarApi;
