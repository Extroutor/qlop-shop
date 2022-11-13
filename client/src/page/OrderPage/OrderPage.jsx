import React, {useEffect} from 'react';
import style from "./OrderPage.module.scss";
import {useSelector} from "react-redux";

const OrderPage = () => {
    const orders = useSelector(state => state.user.orders)
    useEffect(() => {
        document.title = "Мои заказы | Qlop"
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <div className={style.wrap}>
                <h1 className={style.title}>Мои заказы</h1>
                {orders.length < 1
                    ?
                    <div>
                        <h4 className='bas'>Нет совершенных покупок :(</h4>
                    </div>
                    :
                    <div className={style.order_list}>
                        {orders.map(item =>
                            <div key={item.id} className={style.order_item}>
                                <div className={style.date}>{item.date}</div>
                                <div className={style.count_price}>
                                    <div>Количество товаров: {item.items.length} тов</div>
                                    <div>Общая стоимость: {item.totalPrice} ₽</div>
                                </div>

                                <div className={style.list}>Список товаров:</div>
                                <div className={style.item_list}>
                                    {item.items.map(i =>
                                        <div key={i.id} className={style.item}>{i.name} {i.price}₽ {i.size}</div>
                                    )}
                                </div>

                            </div>
                        )}
                    </div>
                }
            </div>
        </div>
    );
};

export default OrderPage;