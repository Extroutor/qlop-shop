import axios from "axios";
import basketItem from "../components/BasketItem/BasketItem";

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const getCategories = async () => {
    const {data} = await $authHost.get('api/category')
    return data
}

export const getAllProducts = async () => {
    const {data} = await $authHost.get('api/product')
    return data
}

export const getOneProduct = async (id) => {
    let {data} = await $authHost.get('api/product/' + id)
    return data
}

export const getSizes = async (id) => {
    const {data} = await $authHost.get('api/sizes/product/' + id)
    return data
}

export const getBasket = async (id) => {
    const {data} = await $authHost.get('api/basket/' + id)
    return data.basket_products
}

export const addBasketItem = async (id, productId, size, count) => {
    await $authHost.post('api/basket/product/' + id, {productId, size, count})
}

export const addFavItem = async (userId, productId) => {
    await $authHost.put('api/favorite/user/' + userId + '/add/' + productId)
}
export const deleteBasketItem = async (basketId, productId) => {
    await $authHost.put('api/basket/' + basketId + '/delete/' + productId)
}

export const deleteFavItem = async (id, productId) => {
    await $authHost.put('api/favorite/user/' + id + '/delete/' + productId)
}

export const getFavorite = async (id) => {
    const {data} = await $authHost.get('api/favorite/' + id)
    return data.favorite_products
}

export const createOrder = async (
    id,
    name,
    surname,
    email,
    address,
    phone,
    products,
    total_price
) => {
    console.log(id, name, surname, email, address, phone, products, total_price)
    const {data} = await $authHost.post('api/orders/user/' + id, {
        name,
        surname,
        email,
        address,
        phone,
        products,
        total_price
    })
    console.log('data', data)
}

export const getOrders = async (id) => {
    console.log(id)
    const {data} = await $authHost.get('api/orders/user/' + id)
    console.log('data', data)
    return data
}