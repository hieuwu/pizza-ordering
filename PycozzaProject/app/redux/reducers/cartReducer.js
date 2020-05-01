import { ADDTOCART, REMOVEFROMCART } from '../actions/type';
import todo from './cartItemReducer'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action.orderLine)
            ];
        case 'REMOVE_TODO':
            {
               
                    let newArr = [...state.filter((elem, idx) => {
                        return elem.id != action.id
                    })];
                    return newArr;
            }
        default:
            return state;
    }
};


export default todos;