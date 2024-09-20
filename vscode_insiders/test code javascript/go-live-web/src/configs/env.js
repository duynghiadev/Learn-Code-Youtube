const prod = import.meta.env.PROD;

// https://go-live-api.onrender.com (render)
// https://goliveapi-vuluu040320.b4a.run  (back4app)
// https://go-live-api.vercel.app (vercel)

const API_URL =
  (prod ? import.meta.env.VITE_API_URL : 'http://localhost:3000') + '/api/v1';
const SOCKET_URL = prod
  ? import.meta.env.VITE_SOCKET_URL
  : 'ws://localhost:3000';

export { API_URL, SOCKET_URL };
