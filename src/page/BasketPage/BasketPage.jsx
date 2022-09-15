import React from 'react';
import BasketItem from "../../components/BasketItem/BasketItem";
import './BasketPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {deleteAll} from "../../redux/slices/userSlice";

const BasketPage = () => {

    const basket = useSelector(state => state.user.basket)
    const totalPrice = useSelector(state => state.user.totalPrice)
    const dispatch = useDispatch();

    return (
        <div className='basket_wrapper'>
            <h1 className='bas'>Моя корзина</h1>
            {basket.length < 1
                ?
                <div>
                    <h4 className='bas'>Ваша корзина пустая :(</h4>
                </div>
                :
                <div>
                    <div className='clear_button'>
                        <button
                            className='clear_button_btn'
                            onClick={() => dispatch(deleteAll())}
                        >
                            Очистить корзину
                        </button>
                    </div>
                    <div className='bas_products'>
                        {basket.map(item => {
                            return <BasketItem key={item.id} item={item}/>
                        })}
                    </div>
                    <div className='total_count'>
                        <div>
                            <b>Total count: </b>
                            {totalPrice}$
                        </div>
                    </div>
                    <div className='order_button'>
                        <button className='button'>Оформить заказ</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default BasketPage