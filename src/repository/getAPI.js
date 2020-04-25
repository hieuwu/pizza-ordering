import React, {Component} from 'react';
import {API} from '../servers/API.js';

// async function getAPI(url) {
//   try {
//     let response = await API.get(url);
//     return response;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }

function getAPI(url) {
	API.get(url+'1')
    	.then(function (response) {
		    console.log(response);
		    return(response)
		  })
    	.catch(function (error) {
		    console.log(error);
		    return(error)
		  });
}

export default getAPI;
