import React, {Component} from 'react';
import {API} from '../servers/API.js';

async function postOrderAPI(url, data, config) {
  try {
    let response = await API.post(url, data, config);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default postOrderAPI;
