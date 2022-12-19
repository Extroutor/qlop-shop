import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import st from './BasketItem.module.scss'
import style from '../Modal/Modal.module.scss'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeCount, decrement, deleteItemFromBasket, increment} from '../../redux/slices/userSlice'
import {setChosenProduct} from '../../redux/slices/catalogSlice'
import Modal from "../Modal/Modal";
import {useState} from "react";
import {addBasketItem, deleteBasketItem} from "../../api/shopApi";
import Cookie from "universal-cookie";

const BasketItem = (props) => {

    const [active, setActive] = useState(false);
    const dispatch = useDispatch()
    const count = props.item.count


    return (
        <div className={st.product_item}>
            <div className={st.group1}>
                <Link
                    to={`/product/${props.item.productId}`}
                    onClick={() => {
                        setChosenProduct(props.item)
                    }}>
                    <div className={st.img_wrapper}>
                        <img className={st.img} src={props.item.productInfo.img} alt={props.item.productInfo.name}/>
                    </div>
                </Link>
                <Link
                    to={`/product/${props.item.productId}`}
                    onClick={() => {
                        setChosenProduct(props.item)
                    }}>
                    <div className={st.basket_item_title}>
                        <p>{props.item.productInfo.name}</p>
                    </div>
                </Link>
            </div>
            <div className={st.group2}>
                <div>{props.item.productInfo.price} ₽</div>
                <div className={st.counter}>
                    <button onClick={() => {
                        const cookie = new Cookie()
                        const id = cookie.get('id')
                        if (props.item.count > 1) {
                            addBasketItem(id, props.item.productInfo.id, props.item.sizeId, props.item.count - 1).then(() => {
                                console.log('получилось')
                                dispatch(changeCount(props.item.productInfo.id, props.item.count - 1))
                            })
                        }
                    }}>-
                    </button>
                    <p>{count}</p>
                    <button onClick={() => {
                        const cookie = new Cookie()
                        const id = cookie.get('id')
                        addBasketItem(id, props.item.productInfo.id, props.item.sizeId, props.item.count + 1).then(() => {
                            console.log('получилось')
                            dispatch(changeCount({id: props.item.productInfo.id, count: props.item.count + 1}))
                        })
                    }}>+
                    </button>
                </div>
                <div>{props.item.count * props.item.productInfo.price} ₽</div>
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
                        onClick={() => {
                            const cookie = new Cookie()
                            let id = cookie.get('id')
                            deleteBasketItem(id, props.item.productInfo.id).then(() => {
                                    dispatch(deleteItemFromBasket(props.item.productInfo.id))
                                    setActive(false)
                                }
                            )
                        }}
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