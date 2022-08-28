import React from 'react';
import CategoryItem from "./CategoryItem";

const Category = () => {

    let categoryList = [
        {id: 1, name: 'Одежда'},
        {id: 2, name: 'Обувь'},
        {id: 3, name: 'Аксесуары'},
        {id: 4, name: 'Часы'},
        {id: 5, name: 'Сертификаты'}
    ]

    return (
        <div className='category'>
            <div className='category-list'>
                <div className='category_item'><b>Все категории</b></div>
                {categoryList.map((item) =>
                    <CategoryItem key={item.id} name={item.name}/>
                )}
            </div>
        </div>
    );
};

export default Category;