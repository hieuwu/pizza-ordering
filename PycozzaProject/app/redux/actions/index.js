import {ADDTOCART, REMOVEFROMCART} from './type.js';

export const addToCart = (orderLine) => {
    return {
        type: 'ADD_TODO',
        orderLine,
    }
}

export const removeFromCart = (orderLine) => {
    return {
        type: 'REMOVE_TODO',
        id: orderLine.id,
    }
}