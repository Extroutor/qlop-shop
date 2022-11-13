import React from 'react';
import {Route, Routes} from "react-router-dom";
import CatalogPage from "../page/CatalogPage/CatalogPage";
import MainPage from "../page/MainPage/MainPage";
import FavoritePage from '../page/FavoritePage/FavoritePage'
import ProductItemPage from "../page/ProductItemPage/ProductItemPage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import BasketPage from "../page/BasketPage/BasketPage";
import AuthPage from "../page/UserPage/AuthPage";
import ContactPage from "../page/ContactPage/ContactPage";
import AboutPage from "../page/AboutPage/AboutPage";
import OrderPage from "../page/OrderPage/OrderPage";

const AppRouter = () => {
    return (
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/catalog/:id' element={<CatalogPage />}/>
                <Route path='/catalog' element={<CatalogPage />}/>
                <Route path='/favorite' element={<FavoritePage />}/>
                <Route path='/auth' element={<AuthPage />}/>
                <Route path='/registration' element={<AuthPage />}/>
                <Route path='/contact' element={<ContactPage />}/>
                <Route path='/basket' element={<BasketPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/order' element={<OrderPage/>}/>
                <Route path='/category/:id' element={<CatalogPage/>}/>
                <Route path='/product/:id' element={<ProductItemPage/>}/>
                <Route path='/*' element={<NotFoundPage/>}/>
            </Routes>
    );
};

export default AppRouter;