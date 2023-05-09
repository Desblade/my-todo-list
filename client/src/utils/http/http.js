import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://195.161.114.252:8080/api',
});

const interceptors = (config) => {
  config.headers.authorization = `bearer ${localStorage.getItem('token')}`;

  return config;
};

$host.interceptors.request.use(interceptors);

export {
  $host
};
