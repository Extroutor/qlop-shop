import React from 'react';
import Category from "../components/Category/Category";
import Catalog from "../components/Catalog/Catalog";

const MainPage = () => {
    return (
        <div className='content'>
            <Category />
            <Catalog />
        </div>
    );
};

export default MainPage;