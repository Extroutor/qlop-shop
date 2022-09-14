import {CHANGE_TYPE, SET_CHOSEN_PRODUCT} from "./type";
import {VIEW_ALL_PRODUCTS} from './type'
import {DELETE_PRODUCT_IN_BASKET} from './type'
import {DELETE_ALL} from './type'
import {DECREMENT} from './type'
import {INCREMENT} from './type'

export const changeCategory = (id) => {
    return {
        type: CHANGE_TYPE,
        id
    }
}

export const viewAllProducts = () => {
    return {
        type: VIEW_ALL_PRODUCTS
    }
}
export const setChosenProduct = (product) => {
    return {
        type: SET_CHOSEN_PRODUCT,
        product
    }
}
export const deleteProductInBasket = (id) => {
    return {
        type: DELETE_PRODUCT_IN_BASKET,
        id
    }
}

export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
}

export const increment = (id) => {
    return {
        type: INCREMENT,
        id
    }
}

export const decrement = (id) => {
    return {
        type: DECREMENT,
        id
    }
}
