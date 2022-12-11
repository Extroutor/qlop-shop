import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import {setUserData} from "../redux/slices/userSlice";

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const registration = async (name, surname, email, password) => {
    const {data} = await $authHost.post('api/user/registration', {name, surname, email, password})

    const cookie = new Cookies();
    cookie.remove("token");
    cookie.set("token", data.token, {
        path: "/",
        maxAge: 60 * 60 * 24,
        sameSite: "strict",
        secure: true,
    });
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $authHost.post('api/user/login', {email, password})
    const cookie = new Cookies();
    cookie.remove("token");
    cookie.remove("id");
    cookie.set("token", data.token, {
        path: "/",
        maxAge: 60 * 60 * 24,
        sameSite: "strict",
        secure: true,
    });
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getUserInformation = async (id) => {
    const {data} = await $authHost.get('api/user/' + id )
    return data
}