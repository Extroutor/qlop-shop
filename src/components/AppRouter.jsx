import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../page/MainPage";
import Basket from "../page/Basket";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/category/:id' element={<MainPage/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;