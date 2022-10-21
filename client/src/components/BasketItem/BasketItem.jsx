import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import st from './BasketItem.module.scss'
import style from '../Modal/Modal.module.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, deleteProductInBasket} from '../../redux/slices/userSlice'
import {setChosenProduct} from '../../redux/slices/catalogSlice'
import Modal from "../Modal/Modal";
import {useState} from "react";


const BasketItem = (props) => {

    const [active, setActive] = useState(false);
    const count = useSelector((state) => state.user.basket.find(item => item.id === props.item.id).count)
    const dispatch = useDispatch()

    return (
        <div className={st.product_item}>
            <div className={st.group1}>
                <Link
                    to={`/product/${props.item.id}`}
                    onClick={() => {
                        setChosenProduct(props.item)
                    }}>
                    <div className={st.img_wrapper}>
                        <img className={st.img} src={props.item.img} alt={props.item.name}/>
                    </div>
                </Link>
                <Link
                    to={`/product/${props.item.id}`}
                    onClick={() => {
                        setChosenProduct(props.item)
                    }}>
                    <div className={st.basket_item_title}>
                        <p>{props.item.name}</p>
                    </div>
                </Link>
            </div>
            <div className={st.group2}>
                <div>{props.item.price} ₽</div>
                <div className={st.counter}>
                    <button onClick={() => dispatch(decrement(props.item.id))}>-</button>
                    <p>{count}</p>
                    <button onClick={() => dispatch(increment(props.item.id))}>+</button>
                </div>
                <div>{props.item.totalPrice} ₽</div>
                <AiOutlineClose
                    style={{width: '25px', height: '25px', cursor: 'pointer'}}
                    onClick={() => setActive(true)}
                />
            </div>
            <Modal active={active} setActive={setActive}>
                <div className={style.text}>Вы действительно хотите удалить этот товар?</div>
                <div className={style.button_wrapper}>
                    <button
                        className={style.button}
                        onClick={() => dispatch(deleteProductInBasket(props.item.id))}
                    >Да
                    </button>
                    <button
                        className={[style.button, style.button_not].join(' ')}
                        onClick={() => setActive(false)}
                    >Нет
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default BasketItem