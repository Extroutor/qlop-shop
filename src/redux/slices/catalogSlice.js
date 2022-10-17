import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    catalogList: [
        {
            id: 1,
            category: 1,
            name: 'Топ',
            price: 1000,
            img: 'https://images.asos-media.com/products/krop-top-s-perekrestnymi-bretelyami-asos-design/13273762-1-stone?$n_960w$&wid=952&fit=constrain'
        },
        {
            id: 2,
            category: 1,
            name: 'Кофта',
            price: 2500,
            img: 'https://images.asos-media.com/products/ukorochennyj-svitshot-s-logotipom-asos-4505/13122102-1-grey?$XXL$'
        },
        {
            id: 3,
            category: 1,
            name: 'Юбка',
            price: 1800,
            img: 'https://images.asos-media.com/products/mini-yubka-asos-design/12560666-1-nude?$XXL$'
        },
        {
            id: 4,
            category: 2,
            name: 'Кросовки',
            price: 3900,
            img: 'https://images.asos-media.com/products/svetlo-bezhevye-krossovki-na-massivnoj-podoshve-asos-design/22883181-1-stone?$XXL$'
        },
        {
            id: 6,
            category: 3,
            name: 'Часы Ролексы',
            price: 9900,
            img: 'https://images.asos-media.com/products/chasy-asos-design/23830768-1-gold?$n_640w$&wid=513&fit=constrain'
        },
        {
            id: 7,
            category: 1,
            name: 'Шорты',
            price: 890,
            img: 'https://images.asos-media.com/products/trikotazhnye-shorty-asos-4505/23749556-1-electricblue?$n_960w$&wid=952&fit=constrain'
        },
        {
            id: 8,
            category: 3,
            name: 'Браслет',
            price: 1500,
            img: 'https://images.asos-media.com/products/serebristyj-braslet-tsepochka-so-strazami-asos-design/200903100-1-silver?$n_1280w$&wid=1125&fit=constrain'
        },
        {
            id: 9,
            category: 3,
            name: 'Шляпа',
            price: 4200,
            img: 'https://images.asos-media.com/products/chernaya-strukturirovannaya-shlyapa-fedora-reguliruemogo-razmera-asos-design/22458018-1-black?$n_1920w$&wid=1926&fit=constrain'
        },
        {
            id: 10,
            category: 4,
            name: 'Помада',
            price: 780,
            img: 'https://images.asos-media.com/products/matovaya-gubnaya-pomada-asos-design-makeup-doubtless/8026776-1-doubtless?$XXL$&wid=513&fit=constrain'
        },
    ],
    categoryList: [
        {
            id: 1,
            name: 'Одежда'
        },
        {
            id: 2,
            name: 'Обувь'
        },
        {
            id: 3,
            name: 'Аксессуары'
        },
        {
            id: 4,
            name: 'Косметика'
        },
    ],
    activeCategory: null,
    filteredCatalogList: '',
    chosenProduct: {}
}

export const catalogSlice = createSlice({
        name: 'catalog',
        initialState,
        reducers: {
            changeCategory: (state, action) => {
                // let newArr = state.catalogList.filter(item => action.payload === item.category)
                state.activeCategory = action.payload
                // state.filteredCatalogList = newArr
                // state.catalogList = newArr
            },
            setChosenProduct: (state, action) => {
                state.chosenProduct = action.payload
            },
            viewAllProducts: (state, action) => {
                state.activeCategory = ''
                state.filteredCatalogList = null
            },
            setSortOption: (state, action) => {
                let list = [...state.catalogList]
                if (action.payload === 'titleAZ') {
                    list.sort((a, b) => a['name'].localeCompare(b['name']))
                } else if (action.payload === 'titleZA') {
                    list.sort((a, b) => b['name'].localeCompare(a['name']))
                } else if (action.payload === 'price91') {
                    list.sort((a, b) => b['price'] - a['price'])
                } else if (action.payload === 'price19') {
                    list.sort((a, b) => a['price'] - b['price'])
                }
                state.catalogList = [...list]
                // console.log('nenrgfjsnavsdkalvf')
            }
        },
    }
)

export const {changeCategory, setChosenProduct, viewAllProducts, setSortOption} = catalogSlice.actions
export default catalogSlice.reducer
