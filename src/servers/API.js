import axios from 'axios';
import configAPI from '../config/configAPI.js';

const instance = axios.create({
  baseURL: configAPI.baseURL,
  headers: {'Content-Type': 'application/json'},
});

instance.interceptors.request.use(
  function(request) {
    console.log('API Request: ');
    console.log(request.method, request.baseURL, request.url);
    return request;
  },
  function(error) {
    console.log('API Response Error: ', error.response);
    return Promise.reject(error.response.data.message);
  },
);

instance.interceptors.response.use(
  function(response) {
    console.log('API Response: ', response.status);
    return response;
  },
  function(error) {
    console.log('API Response Error: ', error.response);
    return Promise.reject(error.response.data.message);
  },
);

export {instance as API};
