import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    favorite: [],
    basket: [],
    orders: [],
    totalPrice: 0,
    isAuth: false,
    userData: {},
    orderData: {}
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
            },
            order: (state, action) => {
                let jsn = JSON.parse(action.payload)
                state.orders.push({...jsn, id: state.orders.length + 1})
                state.basket = []
            },
            setChanges: (state, action) => {
                state.userData.name = action.payload.name
                state.userData.surname = action.payload.surname
                state.userData.date = action.payload.date
            },
            setAuth: (state, action) => {
                state.isAuth = action.payload
            },
            setUserData: (state, action) => {
                state.userData = action.payload
            },
            setBasket: (state, action) => {
                state.basket = [action.payload, ...state.basket]
                state.totalPrice = null

                state.basket.forEach(function (item, i, arr) {
                    if (item.count)
                        state.totalPrice += item.count * item.productInfo.price
                    else
                        state.totalPrice += item.productInfo.price
                });

                // state.basket = state.basket.map(item => {
                //     if (item.count)
                //         state.totalPrice += item.count * item.productInfo.price
                //     else
                //         state.totalPrice += item.productInfo.price
                //
                // })
                console.log(state.basket)
                console.log(state.totalPrice)

            },
            setToBasket: (state, action) => {
                state.basket.push(action.payload)
                state.totalPrice += action.payload.count * action.payload.productInfo.price
            },
            setToFavorite: (state, action) => {
                state.favorite.push(action.payload)
            },
            cleanBasket: (state, action) => {
                state.basket = []
                state.totalPrice = null
            },
            cleanFav: (state, action) => {
                state.favorite = []
            },
            setFavorite: (state, action) => {
                state.favorite = [action.payload, ...state.favorite]
            },
            setOrders: (state, action) => {
                state.orders = action.payload
            },
            deleteItemFromBasket: (state, action) => {
                state.basket = state.basket.filter(item => item.productInfo.id !== action.payload)
                let item = state.basket.find(item => item.productInfo.id !== action.payload)
                state.totalPrice -= item.count * item.productInfo.price

            },
            deleteItemFromFav: (state, action) => {
                state.favorite = state.favorite.filter(item => item.productId !== action.payload)
            },
            changeCount: (state, action) => {
                state.basket = state.basket.map(item => {
                    if (item.productInfo.id !== action.payload.id) {
                        item.count = action.payload.count
                    }
                })
            },
            cleanOrders: (state, action) => {
                state.orders = []
            },
        }
    }
)

export const {
    increment,
    decrement,
    addToBasket,
    addToFav,
    deleteFromFav,
    exit,
    order,
    setChanges,
    setAuth,
    setUserData,
    setBasket,
    setFavorite,
    cleanBasket,
    deleteItemFromBasket,
    changeCount,
    deleteItemFromFav,
    cleanFav,
    cleanOrders,
    setOrders
} = userSlice.actions

export default userSlice.reducer

