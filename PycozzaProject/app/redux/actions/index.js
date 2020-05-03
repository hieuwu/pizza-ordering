import {ADDTOCART, REMOVEFROMCART} from './type.js';

export const addToCart = (orderLine) => {
    return {
        type: ADDTOCART,
        orderLine,
    }
}

export const removeFromCart = (orderLine) => {
    return {
        type: REMOVEFROMCART,
        id: orderLine.id,
    }
}