import React, {Component} from 'react';
import {API} from '../servers/API.js';

async function postAPI(url, data) {
  try {
    let response = await API.post(url, data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default postAPI;
