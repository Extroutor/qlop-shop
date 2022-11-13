import React from 'react';
import style from "../FavoritePage/FavoritePage.module.scss";

const OrderPage = () => {
    return (
        <div>
            <div className={style.wrap}>
                <h1 className={style.page}>Мои заказы</h1>
            </div>
        </div>
    );
};

export default OrderPage;