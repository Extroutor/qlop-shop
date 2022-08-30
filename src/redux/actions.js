import {CHANGE_TYPE} from "./type";
import {VIEW_ALL_PRODUCTS} from './type'

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