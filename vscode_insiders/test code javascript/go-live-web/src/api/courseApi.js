import axiosClient from './axiosClient';

const courseApi = {
  getCourseGroup() {
    const url = '/course-group';
    return axiosClient.get(url);
  },
  registerCourse(id) {
    const url = `/course/register/${id}`;
    return axiosClient.post(url);
  },
  getCourse(slug) {
    const url = `/course/${slug}`;
    return axiosClient.get(url);
  },
  getCourses() {
    const url = `/course`;
    return axiosClient.get(url);
  },
  getTracks(id) {
    const url = `/course/${id}/tracks`;
    return axiosClient.get(url);
  },
  getInformationHome() {
    const url = '/course-group/home';
    return axiosClient.get(url);
  },
  getCoursesFree(params) {
    const url = '/course-group/free';
    return axiosClient.get(url, { params });
  },
  getCoursesPaid(params) {
    const url = '/course-group/paid';
    return axiosClient.get(url, { params });
  },
  getCourseGroupBySlug(slug, params) {
    const url = `/course-group/${slug}`;
    return axiosClient.get(url, { params });
  },
};

export default courseApi;
