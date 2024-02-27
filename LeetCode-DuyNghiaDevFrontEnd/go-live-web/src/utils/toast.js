import { toast } from 'react-toastify';
const toastOptions = {
  position: 'top-right',
  autoClose: 1000,
  pauseOnHover: false,
  draggable: true,
  theme: 'dark',
};

export const toastMessage = (type, message) => {
  toast[type](message, toastOptions);
};
