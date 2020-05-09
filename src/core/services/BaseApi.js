import axios from 'axios';
import AppConfig from '../../config/AppConfig';

const instance = axios.create();

instance.defaults.baseURL = AppConfig.API.baseUrl;

instance.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  response => {
    return response;
  },
  status => {
    if (status.response && status.response.data) {
      return status.response;
    } else {
      return Promise.reject(status);
    }
  },
);
export default instance;
