import axios from 'axios';
import configAPI from '../config/configAPI.js';

const instance = axios.create({
  baseURL: configAPI.baseURL,
  headers: {'Content-Type': 'application/json'},
});

export {instance as API};
