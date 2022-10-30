import React from 'react';
import CategoryItem from "./CategoryItem/CategoryItem";
import style from './Category.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {changeCategory, viewAllProducts} from "../../redux/slices/catalogSlice";
import {Link} from "react-router-dom";

const Category = () => {
    const categoryList = useSelector(state => state.catalog.categoryList)
    const activeCategory = useSelector(state => state.catalog.activeCategory)
    const dispatch = useDispatch()

    return (
        <div className={style.category}>
            <div className={style.category_list}>
                <div className={style.all_prod}
                     onClick={() => dispatch(viewAllProducts())}
                >
                    <Link
                        to='/catalog'
                    >ВСЕ РАЗДЕЛЫ
                    </Link>
                </div>

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