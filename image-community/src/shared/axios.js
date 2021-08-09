// LIBRARY
import axios from 'axios';

// FUNCTION
import { getToken } from './token';

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: '',
});

instance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Accept'] = '*/*';
  config.headers['authorization'] = getToken();
  return config;
});

export default instance;
