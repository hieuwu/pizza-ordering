import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk'
import todoApp from '../reducers/index'
const store = createStore(
    todoApp,
    {},
)

export default store;