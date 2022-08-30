import {CHANGE_TYPE} from "../type";
import {VIEW_ALL_PRODUCTS} from '../type'

const initialState = {
    catalogList: [
        {
            id: 1,
            category: 1,
            name: 'Юбка',
            price: '100',
            img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'
        },
        {
            id: 2,
            category: 1,
            name: 'Кофта',
            price: '100',
            img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'
        },
        {
            id: 3,
            category: 1,
            name: 'Одежда',
            price: '100',
            img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'
        },
        {
            id: 4,
            category: 2,
            name: 'Кросовки',
            price: '100',
            img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'
        },
        {
            id: 6,
            category: 4,
            name: 'Часы Ролексы',
            price: '100',
            img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'
        },
        {
            id: 7,
            category: 1,
            name: 'Юбка',
            price: '100',
            img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'
        },
        {
            id: 8,
            category: 3,
            name: 'Шляпа',
            price: '100',
            img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'
        },
        {
            id: 9,
            category: 1,
            name: 'Одежда',
            price: '100',
            img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'
        },
        {
            id: 10,
            category: 2,
            name: 'Кросовки',
            price: '100',
            img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'
        },
    ],
    categoryList: [
        {id: 1, name: 'Одежда'},
        {id: 2, name: 'Обувь'},
        {id: 3, name: 'Аксесуары'},
        {id: 4, name: 'Часы'},
    ],
    activeCategory: null,
    filteredCatalogList: ''
}

export const catalogReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CHANGE_TYPE:
            let newArr = state.catalogList.filter(item => action.id === item.category)
            newState = {...state, activeCategory: action.id, filteredCatalogList: newArr}
            return newState
        case VIEW_ALL_PRODUCTS:
            newState = {...state, activeCategory: '', filteredCatalogList: null}
            return newState
        default:
            return state
    }
}