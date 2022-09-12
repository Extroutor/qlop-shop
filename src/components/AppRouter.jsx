import React from 'react';
import {Route, Routes} from "react-router-dom";
import CatalogPage from "../page/CatalogPage/CatalogPage";
import MainPage from "../page/MainPage/MainPage";

import Basket from "./Basket";
import ProductItemPage from "./ProductItemPage";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/catalog/:id' element={<CatalogPage />}/>
                <Route path='/catalog/' element={<CatalogPage />}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/category/:id' element={<CatalogPage/>}/>
                <Route path='/product/:id' element={<ProductItemPage/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;