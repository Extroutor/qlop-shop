import {CHANGE_TYPE} from "../type";
import {VIEW_ALL_PRODUCTS} from '../type'
import {SET_CHOSEN_PRODUCT} from '../type'

const initialState = {
    catalogList: [
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
        {
            id: 6,
            category: 4,
            name: 'Часы Ролексы',
            price: '100',
            img: 'https://images.asos-media.com/products/chasy-asos-design/23830768-1-gold?$n_640w$&wid=513&fit=constrain'
        },
        {
            id: 7,
            category: 2,
            name: 'Шорты',
            price: '100',
            img: 'https://images.asos-media.com/products/trikotazhnye-shorty-asos-4505/23749556-1-electricblue?$n_960w$&wid=952&fit=constrain'
        },
        {
            id: 8,
            category: 4,
            name: 'Браслет',
            price: '100',
            img: 'https://images.asos-media.com/products/serebristyj-braslet-tsepochka-so-strazami-asos-design/200903100-1-silver?$n_1280w$&wid=1125&fit=constrain'
        },
        {
            id: 9,
            category: 4,
            name: 'Шляпа',
            price: '100',
            img: 'https://images.asos-media.com/products/chernaya-strukturirovannaya-shlyapa-fedora-reguliruemogo-razmera-asos-design/22458018-1-black?$n_1920w$&wid=1926&fit=constrain'
        },
        {
            id: 10,
            category: 5,
            name: 'Помада',
            price: '100',
            img: 'https://images.asos-media.com/products/matovaya-gubnaya-pomada-asos-design-makeup-doubtless/8026776-1-doubtless?$XXL$&wid=513&fit=constrain'
        },
    ],
    categoryList: [
        {
            id: 1,
            name: 'Новинки'
        },
        {
            id: 2,
            name: 'Одежда'
        },
        {
            id: 3,
            name: 'Обувь'
        },
        {
            id: 4,
            name: 'Аксессуары'
        },
        {
            id: 5,
            name: 'Косметика'
        },
    ],
    activeCategory: null,
    filteredCatalogList: '',
    chosenProduct: {}
}

export const catalogReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CHANGE_TYPE:
            let newArr = state.catalogList.filter(item => action.id === item.category)
            newState = {...state, activeCategory: action.id, filteredCatalogList: newArr}
            return newState
        case SET_CHOSEN_PRODUCT:
            newState = {...state, chosenProduct: action.product}
            console.log('reducer',newState)
            return newState
        case VIEW_ALL_PRODUCTS:
            newState = {...state, activeCategory: '', filteredCatalogList: null}
            return newState
        default:
            return state
    }
}