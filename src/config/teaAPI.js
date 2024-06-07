import axios from 'axios';

const teaAPI = axios.create({
  baseURL: 'http://localhost:3000/',
});

export default teaAPI;

export const authAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  authAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authAPI.defaults.headers.common.Authorization = '';
};
