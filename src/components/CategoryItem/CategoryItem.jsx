import React from 'react';
import style from './CategoryItem.module.css'

const CategoryItem = ({item, activeCategory, changeCategory}) => {
    return (
        <div
            className={activeCategory !== item.id ? style.category_item : style.active}
            onClick={() => changeCategory(item.id)}>
            {item.name}
        </div>
    );
};

export default CategoryItem;