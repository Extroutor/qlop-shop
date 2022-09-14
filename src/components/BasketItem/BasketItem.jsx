import React, {useState} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import './BasketItem.scss'
import {Link} from "react-router-dom";
import {deleteProductInBasket, setChosenProduct, deleteAll, decrement, increment} from "../../redux/actions";
import {connect} from "react-redux";

const BasketItem = (props) => {
    return (
        <div className='product_item'>

            <div className='group1'>
                <Link
                    to={`/product/${props.item.id}`}
                    onClick={() => {
                        props.setChosenProduct(props.item)
                    }}>
                    <div className='img_wrapper'>
                        <img className='img' src={props.item.img} alt={props.item.name}/>
                    </div>
                </Link>
                <Link
                    to={`/product/${props.item.id}`}
                    onClick={() => {
                        props.setChosenProduct(props.item)
                    }}>
                    <div className='basket_item_title'>
                        <p>{props.item.name}</p>
                    </div>
                </Link>
            </div>
            <div className='group2'>
                <div>{props.item.price} ₽</div>
                <div className='counter'>
                    <button onClick={() => props.decrement(props.item.id)}>-</button>
                    <p>1</p>
                    <button onClick={() => props.increment(props.item.id)}>+</button>
                </div>
                <div>{props.item.totalPrice} ₽</div>
                <AiOutlineClose
                    style={{width: '25px', height: '25px', cursor: 'pointer'}}
                    onClick={() => props.deleteProductInBasket(props.item.id)}
                />
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        setChosenProduct: (item) => {
            return dispatch(setChosenProduct(item))
        },
        deleteProductInBasket: (id) => {
            return dispatch(deleteProductInBasket(id))
        },
        increment: (id) => {
            return dispatch(increment(id))
        },
        decrement: (id) => {
            return dispatch(decrement(id))
        },
    }
}

export default connect(null, mapDispatchToProps)(BasketItem);