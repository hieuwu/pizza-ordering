import {combineReducers} from 'redux';
import jobs from './cartReducer';

const jobsApp = combineReducers({
  jobs: jobs,
});

export default jobsApp;
