import React from 'react';
import BasketItem from "../components/BasketItem";

const Basket = () => {
    return (
        <div className='basket_wrapper'>
            <h2 className='shopping_cart'>Корзина</h2>
            {/*<div className='table_title'>*/}
            {/*    <div className='side1'>*/}
            {/*        <div className='item'>Item</div>*/}
            {/*    </div>*/}
            {/*    <div className='side2'>*/}
            {/*        <div>Price</div>*/}
            {/*        <div>Qty</div>*/}
            {/*        <div>Total</div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>

            <div className='total_count'>
                <div>
                    <b>Total count: </b>
                    5000$
                </div>
            </div>
            <div className='order_button'>

                <button className='button'>Оформить заказ</button>
            </div>


        </div>
    );
};

export default Basket;