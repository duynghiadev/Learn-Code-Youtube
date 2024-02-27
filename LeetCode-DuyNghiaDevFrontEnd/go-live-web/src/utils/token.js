import axiosClient from '@/api/axiosClient';

const setToken = (token, user) => {
  if (token && user) {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('jwt', token);
  } else {
    removeToken();
  }
};

const removeToken = () => {
  delete axiosClient.defaults.headers.common[`Authorization`];
  localStorage.removeItem('jwt');
};

export { setToken, removeToken };
