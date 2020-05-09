import {combineReducers} from 'redux';
import jobs from './cartReducer';
import userReducer from './userReducer';

const jobsApp = combineReducers({
  jobs: jobs,
  userReducer: userReducer,
});

export default jobsApp;
