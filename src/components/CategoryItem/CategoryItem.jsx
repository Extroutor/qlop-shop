import React from 'react';
import style from './CategoryItem.module.css'
import {Link} from "react-router-dom";

const CategoryItem = ({item, activeCategory, changeCategory}) => {
    return (
        <Link to={`/category/${item.id}`} style={{textDecoration: 'none'}}>
            <div
                className={activeCategory !== item.id ? style.category_item : style.active}
                onClick={() => changeCategory(item.id)}>
                {item.name}
            </div>
        </Link>

    )
        ;
};

export default CategoryItem;