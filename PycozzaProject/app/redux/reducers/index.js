import {combineReducers} from 'redux'
import todos from './cartReducer'

const todoApp = combineReducers({
    todos
});

export default todoApp;