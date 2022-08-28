import React from 'react';
import ProductItem from "./ProductItem";

const Catalog = () => {

    let catalogList = [
        {id: 1, name: 'Юбка', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        {id: 2, name: 'Кофта', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        {id: 3, name: 'Одежда', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        {id: 4, name: 'Кросовки', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        {id: 5, name: 'Сертификат на 1000 рублей', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        {id: 6, name: 'Часы Ролексы', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        {id: 7, name: 'Юбка', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        {id: 8, name: 'Кофта', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        {id: 9, name: 'Одежда', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        {id: 10, name: 'Кросовки', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        {id: 11, name: 'Сертификат на 1000 рублей', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        // {id: 12, name: 'Часы Ролексы', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        // {id: 13, name: 'Юбка', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        // {id: 14, name: 'Кофта', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        // {id: 15, name: 'Одежда', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        // {id: 16, name: 'Кросовки', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        // {id: 17, name: 'Сертификат на 1000 рублей', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
        // {id: 18, name: 'Часы Ролексы', price: '100', img: 'https://cdn1.flamp.ru/41c60e2c7a3261aafa3a1cd529a6fdce.png'},
    ]


    return (
        <div className='catalog'>
            <div className='catalog_title'>Каталог</div>
            <div className='catalog_wrap'>
                <div className='products'>
                    {catalogList.map(item =>
                        <ProductItem
                            key={item.id}
                            item={item}
                        />
                    )}
                </div>
            </div>

        </div>
    );
};

export default Catalog;