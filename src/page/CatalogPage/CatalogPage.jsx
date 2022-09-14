import React from 'react';
import Category from "../../components/Category/Category";
import Catalog from "../../components/Catalog/Catalog";
import './CatalogPage.scss'

const CatalogPage = () => {
    return (
        <div className='catalog_page'>
            <div className='content'>
                <Category/>
                <Catalog/>
            </div>
        </div>

    );
};

export default CatalogPage