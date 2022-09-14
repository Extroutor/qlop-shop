import {
    ADD_TO_BASKET,
    CHANGE_TYPE,
    SET_CHOSEN_PRODUCT,
    VIEW_ALL_PRODUCTS,
    DELETE_PRODUCT_IN_BASKET,
    DELETE_ALL,
    DECREMENT,
    INCREMENT
} from "./type";


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

export const addToBasket = (item) => {
    return {
        type: ADD_TO_BASKET,
        item
    }
}
