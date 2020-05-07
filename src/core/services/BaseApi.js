import axios from 'axios';
import AppConfig from '../../config/AppConfig';

const instance = axios.create();

// instance.defaults.baseURL = AppConfig.API.baseURL;
instance.defaults.baseURL = 'https://pycopizzabackend.herokuapp.com/api';

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
  error => {
    return Promise.reject(error);
  },
);
export default instance;
