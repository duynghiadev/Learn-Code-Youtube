import axiosClient from './axiosClient';

const otpApi = {
  getOtp(params) {
    const url = '/otp';
    return axiosClient.post(url, params);
  },
};

export default otpApi;
