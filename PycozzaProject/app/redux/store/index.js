import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk'
import PizzaApp from '../reducers/index'
const store = createStore(
    PizzaApp,
    {},
)

export default store;