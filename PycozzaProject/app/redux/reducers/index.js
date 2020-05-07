import {combineReducers} from 'redux'
import cartReducer from './cartReducer'
import userReducer from './userReducer'
const PizzaApp = combineReducers({
    cartReducer,
    userReducer
});

export default PizzaApp;