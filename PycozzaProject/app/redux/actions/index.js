import {ADDTOCART, REMOVEFROMCART} from './type.js';

export const addToCart = (orderLine) => {
    return {
        type: 'ADD_TODO',
        orderLine,
    }
}

export const removefromCart = () => ({type: REMOVEFROMCART});