import React, {useEffect} from 'react';
import style from "./OrderPage.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getBasket, getOneProduct, getOrders} from "../../api/shopApi";
import {cleanBasket, cleanOrders, setBasket, setOrders} from "../../redux/slices/userSlice";
import Cookie from "universal-cookie";

const OrderPage = () => {
    const orders = useSelector(state => state.user.orders)
    const dispatch = useDispatch();
    const cookie = new Cookie()

    useEffect(() => {
        document.title = "Мои заказы | Qlop"
        window.scrollTo(0, 0);

        const id = cookie.get('id')
        if (id) {
            getOrders(id).then((data) => {
                console.log('data', data)
                dispatch(cleanOrders())
                dispatch(setOrders(data))
            })
        }


    }, [])
    return (
        <div>
            <div className={style.wrap}>
                <h1 className={style.title}>Мои заказы</h1>
                {orders.length === 0
                    ?
                    <div>
                        <h4 className='bas'>Нет совершенных покупок :(</h4>
                    </div>
                    :
                    <div className={style.order_list}>
                        {orders.map(item =>
                            <div key={item.id} className={style.order_item}>
                                <div className={style.date}>{item.createdAt.substring(0, 10)}</div>
                                <div className={style.count_price}>
                                    <div>Количество товаров: {item.order_item_products.length} шт</div>
                                    <div>Общая стоимость: {item.total_price} ₽</div>
                                </div>

                                <div className={style.list}>Список товаров:</div>
                                <div className={style.item_list}>
                                    {item.order_item_products.map(i =>
                                        <div key={i.id} className={style.item}>{i.product.name} {i.product.price}₽ {i.size ? i.size.name : ''}</div>
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