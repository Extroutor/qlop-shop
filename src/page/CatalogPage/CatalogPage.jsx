import React, {useEffect} from 'react';
import Category from "../../components/Category/Category";
import Catalog from "../../components/Catalog/Catalog";
import './CatalogPage.scss'

const CatalogPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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