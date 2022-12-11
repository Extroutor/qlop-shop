import axios from "axios";

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