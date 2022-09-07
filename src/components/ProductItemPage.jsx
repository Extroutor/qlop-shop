import React from 'react';
import {useParams} from "react-router-dom";

const ProductItemPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>Страница товара № {params.id}</h1>
            <button>Добавить в корзину</button>
            
        </div>
    );
};

export default ProductItemPage;