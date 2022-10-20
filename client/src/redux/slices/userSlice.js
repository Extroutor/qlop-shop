import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    favoriteProducts: [],
    basket: [],
    totalPrice: 0,
    isAuth: false,
    data: {
        email: 'mail@mail.ru',
        password: 'qwerty'
    }
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
            signIn: (state, action) => {
                if (action.payload.email === state.data.email) {
                    if (action.payload.password === state.data.password) {
                        state.isAuth = true
                    } else {
                        state.isAuth = false
                        console.log('Неверный логин или пароль')
                    }
                } else {
                    state.isAuth = false
                    console.log('Неверный логин или пароль')
                }
            },
            registration: (state, action) => {
                state.data = action.payload
                state.isAuth = true
            },
            exit: (state, action) => {
                state.isAuth = false
            }
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
    deleteFromFav,
    registration,
    signIn,
    exit
} = userSlice.actions

export default userSlice.reducer

