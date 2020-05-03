import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import jobsApp from '../reducers/index';
const store = createStore(jobsApp, {});

export default store;
