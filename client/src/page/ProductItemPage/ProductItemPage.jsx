import React, {useEffect, useState} from 'react';
import './ProductItemPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, addToFav} from "../../redux/slices/userSlice";
import {Link, useNavigate, useParams} from "react-router-dom";
import st from "../../components/Modal/Modal.module.scss";
import Modal from "../../components/Modal/Modal";

const ProductItemPage = () => {

    const param = +useParams().id // convert to number
    const productObj = useSelector(state => state.catalog.catalogList)
    const chosenProduct = productObj.find(item => item.id === param)
    const dispatch = useDispatch()
    const [active, setActive] = useState(false);
    const [isClicked, setIsClicked] = useState(false)
    const [isFavClicked, setIsFavClicked] = useState(false)
    const isAuth = useSelector(state => state.user.isAuth)
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const onClickedButton = () => {
        dispatch(addToBasket(chosenProduct))
        setIsClicked(true)
    }
    const toAuthPage = () => {
        navigate('/auth')
    }
    const onClickedFavButton = () => {
        dispatch(addToFav(chosenProduct))
        setIsFavClicked(true)
    }

    return (
        <div className='product_page'>
            <div className='left_part'>
                <div className='img_wrap'>
                    <img alt={chosenProduct.name}
                         src={chosenProduct.img}/>
                </div>
            </div>
            <div className='right_part'>
                <div className='title'>{chosenProduct.name}</div>
                <div className='price'>{chosenProduct.price} ₽</div>
                {isClicked
                    ?
                    <Link to='/basket'>
                        <button className='button button_clicked'>
                            Перейти в корзину
                        </button>
                    </Link>
                    :
                    <button
                        className='button'
                        onClick={onClickedButton}
                    >
                        В корзину
                    </button>
                }
                {!isFavClicked
                    ?
                    !isAuth
                        ?

                        <button className='button fav clicked'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setActive(true)
                                }}>В избранные
                        </button>
                        :
                        <button className='button fav' onClick={onClickedFavButton}>В избранные</button>
                    :

                    // TODO useHistory

                    <Link to='/favorite'>
                        <button className='button fav' onClick={onClickedFavButton}>Перейти в избранные</button>
                    </Link>
                }
            </div>
            <Modal active={active} setActive={setActive}>
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
        </div>
    );
};

export default ProductItemPage