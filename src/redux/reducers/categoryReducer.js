import { CHANGE_TYPE } from "../type";
import { VIEW_ALL_PRODUCTS } from '../type'

const initialState = {
    categoryList: [
        {id: 1, name: 'Одежда'},
        {id: 2, name: 'Обувь'},
        {id: 3, name: 'Аксесуары'},
        {id: 4, name: 'Часы'},
    ],
    activeCategory: null,
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TYPE:
            return {...state, activeCategory: action.id}
        case VIEW_ALL_PRODUCTS:
            return {...state, activeCategory: null}
        default:
            return state
    }
}