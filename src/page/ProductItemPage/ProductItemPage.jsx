import React from 'react';
import {useParams} from "react-router-dom";
import './ProductItemPage.scss'

const ProductItemPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <div className='product_page'>
            <h1>Страница товара № {params.id}</h1>
            <button>Добавить в корзину</button>
        </div>
    );
};

export default ProductItemPage;