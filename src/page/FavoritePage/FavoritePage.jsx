import React from 'react';
import style from './FavoritePage.module.scss';
import ProductItem from "../../components/Catalog/ProductItem/ProductItem";
import {useSelector} from "react-redux";

const FavoritePage = () => {
    const favoriteProducts = useSelector(state => state.user.favoriteProducts)
    return (
        <>
            <h1 className={style.page}>Мои избранные</h1>
            <div className={style.catalog}>
                <div className={style.fav_list}>
                    <div className={style.products}>
                        {favoriteProducts.map(item =>
                            <ProductItem
                                key={item.id}
                                item={item}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FavoritePage;