import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import './BasketItem.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, deleteProductInBasket} from '../../redux/slices/userSlice'
import {setChosenProduct} from '../../redux/slices/catalogSlice'


const BasketItem = (props) => {

    const count = useSelector((state) => state.user.basket.find(item => item.id === props.item.id).count)
    console.log('Количество товаров ', count)
    const dispatch = useDispatch()

    return (
        <div className='product_item'>
            <div className='group1'>
                <Link
                    to={`/product/${props.item.id}`}
                    onClick={() => {
                        setChosenProduct(props.item)
                    }}>
                    <div className='img_wrapper'>
                        <img className='img' src={props.item.img} alt={props.item.name}/>
                    </div>
                </Link>
                <Link
                    to={`/product/${props.item.id}`}
                    onClick={() => {
                        setChosenProduct(props.item)
                    }}>
                    <div className='basket_item_title'>
                        <p>{props.item.name}</p>
                    </div>
                </Link>
            </div>
            <div className='group2'>
                <div>{props.item.price} ₽</div>
                <div className='counter'>
                    <button onClick={() => dispatch(decrement(props.item.id))}>-</button>
                    <p>{count}</p>
                    <button onClick={() => dispatch(increment(props.item.id))}>+</button>
                </div>
                <div>{props.item.totalPrice} ₽</div>
                <AiOutlineClose
                    style={{width: '25px', height: '25px', cursor: 'pointer'}}
                    onClick={() => dispatch(deleteProductInBasket(props.item.id))}
                />
            </div>
        </div>
    )
}

export default BasketItem