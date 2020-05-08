import {ADDTOCART, REMOVEFROMCART, LOADLOCALCART, SAVELOCALCART, ADDUSER, REMOVEUSER, REMOVECART} from './type.js';

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
export const removeUser = () => {
    return {
        type: REMOVEUSER,
    }
}

export const removeCart = () => {
    return {
        type: REMOVECART,
    }
}