import {ADDTOCART, REMOVEFROMCART} from '../actions/type';
import todo from './cartItemReducer'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action.orderLine)
            ];
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state;
    }
};

export default todos;