import React, {Component} from 'react';
import {API} from '../servers/API.js';

let config = {
  headers: {
    'content-type': 'application/json; charset=UTF-8',
  },
};

async function getAPI(url) {
  try {
    let response = await API.get(url, config);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default getAPI;
