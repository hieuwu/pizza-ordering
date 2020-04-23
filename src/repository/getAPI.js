import React, {Component} from 'react';
import {API} from '../servers/API.js';

async function getAPI(url) {
  try {
    let response = await API.get(url);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default getAPI;
