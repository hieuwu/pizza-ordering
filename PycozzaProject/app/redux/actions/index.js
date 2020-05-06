import {ADDTOCART, REMOVEFROMCART, LOADLOCALCART, SAVELOCALCART, ADDUSER} from './type.js';

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

export const loadCart = () => {
    return {
        type: LOADLOCALCART,
    }
}

export const saveCart = () => {
    return {
        type: SAVELOCALCART,
    }
}
export const addUser = (user) => {
    return {
        type: ADDUSER,
        user,
    }
}