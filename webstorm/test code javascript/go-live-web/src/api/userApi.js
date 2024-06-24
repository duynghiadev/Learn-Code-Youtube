import axiosClient from './axiosClient';

const userApi = {
  getUsers() {
    const url = '/auth/users';
    return axiosClient.get(url);
  },
  getMe() {
    const url = '/auth/me';
    return axiosClient.get(url);
  },
  getUser(username) {
    const url = `/auth/profile/${username}`;
    return axiosClient.get(url);
  },
  login(params) {
    const url = '/auth/login';
    return axiosClient.post(url, params);
  },
  logout(id) {
    const url = `/auth/logout/${id}`;
    return axiosClient.post(url);
  },
  register(params) {
    const url = '/auth/register';
    return axiosClient.post(url, params);
  },
  registerCourse() {
    const url = '/auth/register_course';
    return axiosClient.get(url);
  },
  getChatUsers(params) {
    const url = `/auth/all-users`;
    return axiosClient.get(url, { params });
  },
  auth(params) {
    const url = `/auth/success`;
    return axiosClient.post(url, params);
  },
  updateUser(params) {
    const url = `/auth/update`;
    return axiosClient.patch(url, params);
  },
  getRegisteredCourses(userName) {
    const url = `/auth/profile/${userName}/course-registered`;
    return axiosClient.get(url);
  },
};

export default userApi;
