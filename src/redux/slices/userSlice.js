import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    favoriteProducts: [
        {
            id: 1,
            category: 1,
            name: 'Топ',
            price: '100',
            img: 'https://images.asos-media.com/products/krop-top-s-perekrestnymi-bretelyami-asos-design/13273762-1-stone?$n_960w$&wid=952&fit=constrain'
        },
        {
            id: 2,
            category: 1,
            name: 'Кофта',
            price: '100',
            img: 'https://images.asos-media.com/products/ukorochennyj-svitshot-s-logotipom-asos-4505/13122102-1-grey?$XXL$'
        },
        {
            id: 3,
            category: 1,
            name: 'Юбка',
            price: '100',
            img: 'https://images.asos-media.com/products/mini-yubka-asos-design/12560666-1-nude?$XXL$'
        },
        {
            id: 4,
            category: 2,
            name: 'Кросовки',
            price: '100',
            img: 'https://images.asos-media.com/products/svetlo-bezhevye-krossovki-na-massivnoj-podoshve-asos-design/22883181-1-stone?$XXL$'
        },
    ],
    basket: [],
    // basket: [
    //     {
    //         id: 1,
    //         category: 1,
    //         name: 'Топ',
    //         count: 1,
    //         price: 100,
    //         totalPrice: 100,
    //         img: 'https://images.asos-media.com/products/krop-top-s-perekrestnymi-bretelyami-asos-design/13273762-1-stone?$n_960w$&wid=952&fit=constrain'
    //     },
    //     {
    //         id: 2,
    //         category: 1,
    //         name: 'Кофта',
    //         count: 1,
    //         price: '100',
    //         totalPrice: '100',
    //         img: 'https://images.asos-media.com/products/ukorochennyj-svitshot-s-logotipom-asos-4505/13122102-1-grey?$XXL$'
    //     },
    //     {
    //         id: 3,
    //         category: 1,
    //         name: 'Юбка',
    //         count: 1,
    //         price: '100',
    //         totalPrice: '100',
    //         img: 'https://images.asos-media.com/products/mini-yubka-asos-design/12560666-1-nude?$XXL$'
    //     },
    //     {
    //         id: 4,
    //         category: 2,
    //         name: 'Кросовки',
    //         count: 1,
    //         price: '100',
    //         totalPrice: '100',
    //         img: 'https://images.asos-media.com/products/svetlo-bezhevye-krossovki-na-massivnoj-podoshve-asos-design/22883181-1-stone?$XXL$'
    //     },
    // ],
    totalPrice: 0
}

const calcTotalPrice = (basket) => {
    return basket.reduce((sum, item) => item.price * item.count + sum, 0);
};

export const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
            increment: (state, action) => {
                const findItem = state.basket.find(item => item.id === action.payload)
                if (findItem) {
                    findItem.count++
                }
                findItem.totalPrice = findItem.price * findItem.count
                state.totalPrice = calcTotalPrice(state.basket)
            },
            decrement: (state, action) => {
                const findItem = state.basket.find(item => item.id === action.payload)
                if (findItem) {
                    if (findItem.count > 1)
                        findItem.count--
                }
                findItem.totalPrice = findItem.price * findItem.count
                state.totalPrice = calcTotalPrice(state.basket)
            },
            deleteProductInBasket: (state, action) => {
                state.basket = state.basket.filter((obj) => obj.id !== action.payload);
                state.totalPrice = calcTotalPrice(state.basket)
            },
            deleteAll: (state, action) => {
                state.basket = []
                state.totalPrice = calcTotalPrice(state.basket)
            },
            addToBasket: (state, action) => {
                const findItem = state.basket.find((obj) => obj.id === action.payload.id);

                if (findItem) {
                    findItem.count++;
                } else {
                    state.basket.push({
                        ...action.payload,
                        count: 1,
                        totalPrice: action.payload.price
                    });
                }
                state.totalPrice = calcTotalPrice(state.basket)
            },
            addToFav: (state, action) => {
                const findItem = state.favoriteProducts.find((obj) => obj.id === action.payload.id);

                if (!findItem) {
                    state.favoriteProducts.push({
                        ...action.payload,
                        count: 1,
                    });
                }
            },
            deleteFromFav: (state, action) => {
                const findItem = state.favoriteProducts.find((obj) => obj.id === action.payload.id);
                if (findItem) {
                    state.favoriteProducts = state.favoriteProducts.filter((obj) => obj.id !== action.payload.id);
                }
            },
        }
    }
)

export const {
    increment,
    decrement,
    deleteProductInBasket,
    deleteAll,
    addToBasket,
    addToFav,
    deleteFromFav
} = userSlice.actions

export default userSlice.reducer

