import React from 'react';
import BasketItem from "../../components/BasketItem/BasketItem";
import './BasketPage.scss'
import {connect} from "react-redux";
import {deleteProductInBasket, deleteAll} from "../../redux/actions";

const BasketPage = (props) => {
    return (
        <div className='basket_wrapper'>
            <h1 className='bas'>Моя корзина</h1>
            {props.basket.length < 1
                ?
                <div>
                    <h4 className='bas'>Ваша корзина пустая :(</h4>
                </div>
                :
                <div>
                    <div className='clear_button'>
                        <button
                            className='clear_button_btn'
                            onClick={props.deleteAll}
                        >
                            Очистить корзину
                        </button>
                    </div>
                    <div className='bas_products'>
                        {props.basket.map(item => {
                            return <BasketItem key={item.id} item={item}/>
                        })}
                    </div>
                    <div className='total_count'>
                        <div>
                            <b>Total count: </b>
                            {props.totalPrice}$
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


const mapStateToProps = (state) => {
    return {
        basket: state.user.basket,
        totalPrice: state.user.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAll: () => {
            return dispatch(deleteAll())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);