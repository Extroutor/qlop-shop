import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    catalogList: [],
    categoryList: [],
    productItem: null,
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
            },
            setCategories: (state, action) => {
                state.categoryList = action.payload
            },
            setProducts: (state, action) => {
                state.catalogList = action.payload
            },
            productItem: (state, action) => {
                state.productItem = action.payload
            }
        },
    }
)

export const {
    changeCategory,
    setChosenProduct,
    viewAllProducts,
    setSortOption,
    setCategories,
    setProducts,
} = catalogSlice.actions

export default catalogSlice.reducer
