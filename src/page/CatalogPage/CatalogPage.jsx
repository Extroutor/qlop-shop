import React from 'react';
import Category from "../../components/Category/Category";
import Catalog from "../../components/Catalog/Catalog";
import './CatalogPage.scss'

const CatalogPage = ({categoryList}) => {
    return (
        <div className='content'>
            <Category categoryList={categoryList}/>
            <Catalog />
        </div>
    );
};

export default CatalogPage;