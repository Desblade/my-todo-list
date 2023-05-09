import jwtDecode from 'jwt-decode';
import { $host } from './http';

export const registerAPI = async (userData) => {
  const { data } = await $host.post('/user/register', userData);

  localStorage.setItem('token', data.token);

  return jwtDecode(data.token);
};

export const loginAPI = async (userData) => {
  const { data } = await $host.post('/user/login', userData);

  localStorage.setItem('token', data.token);

  return jwtDecode(data.token);
};

export const logOutAPI = () => {
  localStorage.removeItem('token');
};

export const checkTokenAPI = async () => {
  const { data } = await $host.get('/user/check');

  return jwtDecode(data.token);
};

export const getResponsibleAPI = async () => {
  const { data } = await $host.get('/user/getResponsible');

  return data;
};

export const getManagersAPI = async () => {
  const { data } = await $host.get('/user/getManager');

  return data;
};
