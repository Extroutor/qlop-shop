import {DECREMENT, DELETE_PRODUCT_IN_BASKET, INCREMENT} from "../type";
import {CALCULATE_COST_OF_ORDER} from "../type";
import {DELETE_ALL} from "../type";
import {ADD_TO_BASKET} from "../type";

const initialState = {
    favoriteProducts: [
        {
            id: 1,
            category: 2,
            name: 'Топ',
            price: '100',
            img: 'https://images.asos-media.com/products/krop-top-s-perekrestnymi-bretelyami-asos-design/13273762-1-stone?$n_960w$&wid=952&fit=constrain'
        },
        {
            id: 2,
            category: 2,
            name: 'Кофта',
            price: '100',
            img: 'https://images.asos-media.com/products/ukorochennyj-svitshot-s-logotipom-asos-4505/13122102-1-grey?$XXL$'
        },
        {
            id: 3,
            category: 2,
            name: 'Юбка',
            price: '100',
            img: 'https://images.asos-media.com/products/mini-yubka-asos-design/12560666-1-nude?$XXL$'
        },
        {
            id: 4,
            category: 3,
            name: 'Кросовки',
            price: '100',
            img: 'https://images.asos-media.com/products/svetlo-bezhevye-krossovki-na-massivnoj-podoshve-asos-design/22883181-1-stone?$XXL$'
        },
    ],
    basket: [
        {
            id: 1,
            category: 2,
            name: 'Топ',
            count: 1,
            price: '100',
            totalPrice: '100',
            img: 'https://images.asos-media.com/products/krop-top-s-perekrestnymi-bretelyami-asos-design/13273762-1-stone?$n_960w$&wid=952&fit=constrain'
        },
        {
            id: 2,
            category: 2,
            name: 'Кофта',
            count: 1,
            price: '100',
            totalPrice: '100',
            img: 'https://images.asos-media.com/products/ukorochennyj-svitshot-s-logotipom-asos-4505/13122102-1-grey?$XXL$'
        },
        {
            id: 3,
            category: 2,
            name: 'Юбка',
            count: 1,
            price: '100',
            totalPrice: '100',
            img: 'https://images.asos-media.com/products/mini-yubka-asos-design/12560666-1-nude?$XXL$'
        },
        {
            id: 4,
            category: 3,
            name: 'Кросовки',
            count: 1,
            price: '100',
            totalPrice: '100',
            img: 'https://images.asos-media.com/products/svetlo-bezhevye-krossovki-na-massivnoj-podoshve-asos-design/22883181-1-stone?$XXL$'
        },
    ],
    total: ''
}

export const userReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case DELETE_PRODUCT_IN_BASKET:
            return newState = {...state, basket: state.basket.filter(i => i.id !== action.id)}
        case CALCULATE_COST_OF_ORDER:
            return newState = {...state, basket: state.basket.filter(i => i.id !== action.id)}
        case DELETE_ALL:
            return newState = {...state, basket: []}
        case INCREMENT:
            return newState = {...state, basket: state.basket.map(item => item.count++)}
        case DECREMENT:
            newState = {...state, basket: state.basket.map(item => item.count--)}
            return newState
        case ADD_TO_BASKET:
            newState = {...state, basket: [...state.basket, action.item]}
            console.log('ns',newState)
            return newState
        default:
            return state
    }
}