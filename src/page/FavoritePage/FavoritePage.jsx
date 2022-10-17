import React from 'react';
import style from './FavoritePage.module.scss';
import {useSelector} from "react-redux";
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import {useEffect} from "react";

const FavoritePage = () => {
    const favorites = useSelector(state => state.user.favoriteProducts)
    const favoriteProducts = useSelector(state => state.user.favoriteProducts)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className={style.wrap}>
            <h1 className={style.page}>Мои избранные</h1>
            {favorites.length < 1
                ?
                <div>
                    <h4 className='bas'>Нет избранных товаров :(</h4>
                </div>
                :
                <div className={style.catalog}>
                    <div className={style.fav_list}>
                        <div className={style.products}>
                            {favoriteProducts.map(item =>
                                <FavoriteItem key={item.id} item={item}/>
                            )}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default FavoritePage;