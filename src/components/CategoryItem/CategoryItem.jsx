import React, {useEffect} from 'react';
import style from './CategoryItem.module.css'
import {Link, useParams} from "react-router-dom";

const CategoryItem = ({item, activeCategory, changeCategory}) => {
    const p = useParams();

    // useEffect(() => {
    //     changeCategory(p.id)
    // }, [])

    return (
        <Link to={`/catalog/${item.id}`} style={{textDecoration: 'none'}}>
            <div
                className={activeCategory !== item.id ? style.category_item : style.active}
                onClick={() => changeCategory(item.id)}>
                {item.name}
            </div>
        </Link>
    )
}

export default CategoryItem;