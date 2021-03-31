import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);
