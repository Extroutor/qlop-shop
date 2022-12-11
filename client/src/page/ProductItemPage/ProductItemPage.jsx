import React, {useEffect, useState} from 'react';
import './ProductItemPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, addToFav, deleteFromFav} from "../../redux/slices/userSlice";
import {Link, useNavigate, useParams} from "react-router-dom";
import st from "../../components/Modal/Modal.module.scss";
import Modal from "../../components/Modal/Modal";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {getOneProduct, getSizes} from "../../api/shopApi";

const ProductItemPage = () => {
    const param = +useParams().id // convert to number
    const [chosenProduct, setChosenProduct] = useState({sizes: []})
    const dispatch = useDispatch()
    const [active, setActive] = useState(false);
    const [activeFav, setActiveFav] = useState(false);
    const [isClicked, setIsClicked] = useState(false)
    const [size, setSize] = useState('')
    const isAuth = useSelector(state => state.user.isAuth)
    const navigate = useNavigate();
    const [onFavClicked, setOnFavClicked] = useState(false)
    const [sizes, setSizes] = useState([])

    useEffect(() => {
        document.title = chosenProduct.name + ' | QLOP'
        window.scrollTo(0, 0);
        getOneProduct(param).then(data => setChosenProduct(data))
        getSizes(param).then(sizes => setSizes(sizes))
    }, [])

    const onClickedButton = () => {
        if (chosenProduct.sizes.length > 0) {
            if (!size) {
                setActive(true)
            } else {
                dispatch(addToBasket({...chosenProduct, size}))
                setIsClicked(true)
            }
        } else {
            dispatch(addToBasket(chosenProduct))
            setIsClicked(true)
        }
    }
    
    const toAuthPage = () => {
        navigate('/auth')
    }
    const onClickedFavButton = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (onFavClicked) {
            dispatch(deleteFromFav(chosenProduct))
        }
        dispatch(addToFav(chosenProduct))
        setOnFavClicked(!onFavClicked)
    }

    return (
        <div>
            <div className='product_page'>
                <div className='left_part'>
                    <div className='img_wrap'>
                        <img alt={chosenProduct.name}
                             src={chosenProduct.img}/>
                    </div>
                </div>
                <div className='right_part'>
                    {onFavClicked
                        ?
                        <div className='big_heart'>
                            <AiFillHeart
                                className='big_her'
                                onClick={(e) => onClickedFavButton(e)}
                            />
                        </div>
                        :
                        isAuth
                            ?
                            <div className='big_heart'>
                                <AiOutlineHeart
                                    className='big_her'
                                    onClick={(e) => {
                                        onClickedFavButton(e)
                                    }}
                                />
                            </div>
                            :
                            <div className='big_heart'>
                                <AiOutlineHeart
                                    className='big_her'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        setActiveFav(true)
                                    }}
                                />
                            </div>
                    }
                    <div className='title'>{chosenProduct.name}</div>
                    <div className='price'>{chosenProduct.price} ₽</div>
                    {sizes.length > 0
                        ?
                        <div className='size_wrapper'>
                            {sizes.map((item, index) =>
                                <div key={index} className={size === item.name ? 'size_item active' : 'size_item'}
                                     onClick={() => setSize(item.name)}>{item}</div>
                            )}
                        </div>
                        :
                        <></>
                    }

                    <div className='button_wrap'>
                        {isClicked
                            ?
                            <button className='button button_clicked'>
                                В корзине
                            </button>
                            :
                            <button
                                className='button'
                                onClick={onClickedButton}
                            >
                                В корзину
                            </button>
                        }
                        {isClicked
                            ?
                            <Link to='/basket'>
                                <button className='button button_basket'>
                                    Оформить заказ
                                </button>
                            </Link>
                            :
                            <></>
                        }
                    </div>
                    <div className='description'>
                        <div className='desct_item'>
                            <div className='desct_title'>Описание:</div>
                            <div className='descr_text'>{chosenProduct.description}</div>
                        </div>
                        <div className='desct_item'>
                            <div className='desct_title'>Артикул:</div>
                            <div className='descr_text'>{chosenProduct.article}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={activeFav} setActive={setActiveFav}>
                <div className={st.text}>Вы не вошли в систему</div>
                <div className={st.button_wrapper}>
                    <button
                        className={st.button}
                        onClick={() => toAuthPage()}
                    >Войти
                    </button>
                    <button
                        className={[st.button, st.button_not].join(' ')}
                        onClick={() => setActive(false)}
                    >Закрыть
                    </button>
                </div>
            </Modal>
            <Modal active={active} setActive={setActive}>
                <div className={st.text}>Выберите размер, чтобы добавить в корзину</div>
                <div className={st.button_wrapper}>
                    <button
                        className={[st.button, st.button_not].join(' ')}
                        onClick={() => setActive(false)}
                    >Ок
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default ProductItemPage