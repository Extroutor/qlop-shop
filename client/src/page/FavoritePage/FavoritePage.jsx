import React from 'react';
import style from './FavoritePage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import {useEffect} from "react";
import {getFavorite, getOneProduct} from "../../api/shopApi";
import {cleanFav, setFavorite} from "../../redux/slices/userSlice";
import Cookie from "universal-cookie";

const FavoritePage = () => {
    const favorites = useSelector(state => state.user.favorite)
    const cookie = new Cookie()
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Избранные | Qlop"
        window.scrollTo(0, 0);

            const id = cookie.get('id')
            if (id) {
                getFavorite(id).then((data) => {
                    dispatch(cleanFav())
                    data.map(item => {
                        console.log('dataaa', data)
                        getOneProduct(item.productId).then(data2 => {
                            dispatch(setFavorite({...item, productInfo: data2}))
                        })
                    })
                })
            }

    }, [])


    return (
        <div className={style.wrap}>
            <h1 className={style.page}>Мои избранные</h1>
            {favorites.length === 0
                ?
                <div>
                    <h4 className='bas'>Нет избранных товаров :(</h4>
                </div>
                :
                <div className={style.catalog}>
                    <div className={style.fav_list}>
                        <div className={style.products}>
                            {favorites.map(item =>
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