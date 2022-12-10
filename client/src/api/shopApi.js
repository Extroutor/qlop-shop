import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const getCategories = async () => {
    const {data} = await $authHost.get('api/category')
    console.log('datta', data)
    return data
}

export const getAllProducts = async () => {
    const {data} = await $authHost.get('api/product')
    console.log('datta', data)
    return data
}

export const getOneProduct = async (id) => {
    const {data} = await $authHost.get('api/product/' + id)
    console.log('datta', data)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

