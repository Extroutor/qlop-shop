import React from 'react';
import CategoryItem from "./CategoryItem/CategoryItem";
import style from './Category.module.scss'
import {useSelector} from 'react-redux'
import {changeCategory} from "../../redux/slices/catalogSlice";

const Category = () => {
    const categoryList = useSelector(state => state.catalog.categoryList)
    const activeCategory = useSelector(state => state.catalog.activeCategory)

    return (
        <div className={style.category}>
            <div className={style.category_list}>
                {categoryList.map((item) => {
                    return <CategoryItem
                        key={item.id}
                        item={item}
                        activeCategory={activeCategory}
                        changeCategory={changeCategory}
                    />
                })}
            </div>
        </div>
    );
};

export default Category