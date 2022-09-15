import React from 'react';
import style from './CategoryItem.module.scss'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const CategoryItem = ({item, activeCategory, changeCategory}) => {

    const dispatch = useDispatch()

    return (
        <Link to={`/catalog/${item.id}`} style={{textDecoration: 'none'}}>
            <div
                className={activeCategory !== item.id
                    ? style.category_item
                    : style.active}
                onClick={() => dispatch(changeCategory(item.id))}>
                {item.name}
            </div>
        </Link>
    )
}

export default CategoryItem;