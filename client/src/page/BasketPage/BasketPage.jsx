import React, {useState} from 'react';
import BasketItem from "../../components/BasketItem/BasketItem";
import './BasketPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    cleanBasket,
    deleteItemFromBasket,
    order,
    setBasket,
} from "../../redux/slices/userSlice";
import Modal from "../../components/Modal/Modal";
import {useEffect} from "react";
import style from "../../components/Modal/Modal.module.scss";
import {useNavigate} from "react-router-dom";
import OrderModal from "../../components/Modal/OrderModal/OrderModal";
import done from './../../assets/done.svg'
import {createOrder, deleteBasketItem, getBasket, getOneProduct} from "../../api/shopApi";
import Cookie from "universal-cookie";

const BasketPage = () => {
    const [deleteActive, setDeleteActive] = useState(false);
    const [orderActive, setOrderActive] = useState(false);
    const user = useSelector(state => state.user.userData)
    let [userData, setUserData] = useState({name: user.name, surname: user.surname, email: user.email})
    let [address, setAddress] = useState('')
    let [phone, setPhone] = useState('')
    let [isOrdered, setIsOrdered] = useState(false)
    const [err, setErr] = useState(false)
    const basket = useSelector(state => state.user.basket)
    const totalPrice = useSelector(state => state.user.totalPrice)
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth)
    const navigate = useNavigate()
    const cookie = new Cookie()


    useEffect(() => {
        document.title = "Корзина | Qlop"
        window.scrollTo(0, 0);
        const id = cookie.get('id')
        if (id) {
            getBasket(id).then((data) => {
                dispatch(cleanBasket())
                    data.map(item => {
                        getOneProduct(item.productId).then(data2 => {
                            dispatch(setBasket({...item, productInfo: data2}))
                        })
                    })
                })
        }
    }, [])

    const toAuthPage = () => {
        navigate('/auth')
    }

    const orderHandler = () => {
        if (!address || !phone) {
            setErr(true)
        } else {
            let cookie = new Cookie()
            let id = cookie.get('id')
            if (id) {
                createOrder(
                    id,
                    userData.name,
                    userData.surname,
                    userData.email,
                    phone,
                    address,
                    basket,
                    totalPrice
                ).then(() => {
                    setErr(false)
                    setIsOrdered(true)
                })
            }
        }
    }

    return (
        <div className='basket_wrapper'>
            <h1 className='bas'>Моя корзина</h1>
            {basket.length === 0
                ?
                <div>
                    <h4 className='bas'>Ваша корзина пустая :(</h4>
                </div>
                :
                <div>
                    <div className='clear_button'>
                        <button
                            className='clear_button_btn'
                            onClick={() => setDeleteActive(true)}

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
                            <b>Сумма: </b>
                            {totalPrice} ₽
                        </div>
                    </div>
                    <div className='order_button'>
                        <button
                            className='button'
                            onClick={() => setOrderActive(true)}
                        >Оформить заказ
                        </button>
                    </div>
                </div>
            }
            {!isAuth
                ?
                <Modal active={orderActive} setActive={setOrderActive}>
                    <>
                        <div className={style.text}>Для оформления заказа необходимо войти в систему</div>
                        <div className={style.button_wrapper}>
                            <button
                                className={style.button}
                                onClick={() => toAuthPage()}
                            >Войти
                            </button>
                            <button
                                className={[style.button, style.button_not].join(' ')}
                                onClick={() => setOrderActive(false)}
                            >Закрыть
                            </button>
                        </div>
                    </>
                </Modal>
                :
                isOrdered
                    ?
                    <Modal active={orderActive} setActive={setOrderActive}>
                        <div className='done_wrap'>
                            <div className='done_img_wrap'>
                                <img src={done} alt='pic'/>
                            </div>
                            <div className='done_text'>Заказ успешно оформлен</div>
                            <div className='order_btns_wrap'>
                                <button
                                    className='order_button order_button_not'
                                    onClick={() => {
                                        setOrderActive(false)
                                        navigate('/order')
                                    }}
                                >На страницу заказов
                                </button>
                                <button
                                    className='order_button order_button_not'
                                    onClick={() => {
                                        setOrderActive(false)
                                    }}
                                >Закрыть
                                </button>
                            </div>
                        </div>
                    </Modal>
                    :
                    <OrderModal active={orderActive} setActive={setOrderActive}>
                        <div className='order_wrap'>
                            <div className='order_title'>Оформление зaказа</div>
                            <div className='order_content_wrap'>
                                <div className='order_list'>
                                    {basket.map(item =>
                                        <div key={item.productInfo.id} className='order_item'>
                                            <div className='g1'>
                                                <div className='order_img_wrap'>
                                                    <img src={item.productInfo.img} className='order_img'
                                                         alt={item.productInfo.name}/>
                                                </div>
                                                <div className='order_item_name'>{item.productInfo.name}</div>
                                            </div>
                                            <div className='g2'>
                                                <div className='order_item_size'>{item.productInfo.size}</div>
                                                <div className='order_item_count'>{item.count} шт.</div>
                                                <div className='order_item_price'>{item.productInfo.price} ₽
                                                    / {item.totalPrice} ₽
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </div>
                                <div className='order_total_price'>
                                    Общая сумма: <span style={{color: 'black', fontWeight: '600'}}>{totalPrice} ₽</span>
                                </div>
                                <div className='order_contacts'>
                                    <div className='order_contact_title'>Контактные данные</div>
                                    <input
                                        type='name'
                                        placeholder='Введите ваше имя'
                                        className='input'
                                        value={userData.name}
                                        onChange={(e) => {
                                            setErr(false)
                                            setUserData({...userData, name: e.target.value})
                                        }}/>
                                    <input
                                        type='surname'
                                        placeholder='Введите вашу фамилию'
                                        className='input'
                                        value={userData.surname}
                                        onChange={(e) => {
                                            setErr(false)
                                            setUserData({...userData, surname: e.target.value})
                                        }}/>
                                    <input
                                        type='email'
                                        placeholder='Введите ваш email'
                                        className='input'
                                        value={userData.email}
                                        onChange={(e) => {
                                            setErr(false)
                                            setUserData({...userData, email: e.target.value})
                                        }}/>
                                    <input
                                        type='address'
                                        placeholder='Введите адрес доставки'
                                        className='input'
                                        value={address}
                                        onChange={(e) => {
                                            setErr(false)
                                            setAddress(e.target.value)
                                        }}/>
                                    <input
                                        type='tel'
                                        placeholder='Введите номер телефона'
                                        className='input'
                                        value={phone}
                                        onChange={(e) => {
                                            setErr(false)
                                            setPhone(e.target.value)
                                        }}/>
                                </div>
                                <div>
                                    <div style={err ? {color: 'red'} : {opacity: '0'}}>Заполните форму</div>
                                </div>
                                <div className='order_btns_wrap'>
                                    <button
                                        className='order_button'
                                        onClick={() => orderHandler()}
                                    >Оформить
                                    </button>
                                    <button
                                        className='order_button order_button_not'
                                        onClick={() => setOrderActive(false)}
                                    >Отменить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </OrderModal>
            }
            <Modal active={deleteActive} setActive={setDeleteActive}>
                <div className={style.text}>Вы действительно хотите удалить этот товар?</div>
                <div className={style.button_wrapper}>
                    <button
                        className={style.button}
                        onClick={() => {
                            const cookie = new Cookie()
                            let id = cookie.get('id')
                            basket.map((item) => {
                                deleteBasketItem(id, item.productInfo.id).then(() => {
                                        dispatch(deleteItemFromBasket(item.productInfo.id))
                                    }
                                )
                            })
                            setDeleteActive(false)
                        }}
                    >Да
                    </button>
                    <button
                        className={[style.button, style.button_not].join(' ')}
                        onClick={() => setDeleteActive(false)}
                    >Нет
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default BasketPage