import React, {useState} from 'react';
import style from './ProductItem.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setChosenProduct} from "../../../redux/slices/catalogSlice";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {addToFav, deleteFromFav, deleteProductInBasket} from "../../../redux/slices/userSlice";
import Modal from "../../Modal/Modal";
import st from "../../BasketItem/BasketItem.module.scss";

const ProductItem = (props) => {
    const [onFavClicked, setOnFavClicked] = useState(false)
    const [active, setActive] = useState(false);
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (onFavClicked) {
            dispatch(deleteFromFav(props.item))
        }
        dispatch(addToFav(props.item))
        setOnFavClicked(!onFavClicked)
    }

    const toAuthPage = () => {
        navigate('/auth')
    }


    return (
        <div className={style.product}>
            <Link
                className={style.product_link}
                to={`/product/${props.item.id}`}
                onClick={() => {
                    dispatch(setChosenProduct(props.item))
                }}
            >
                <div className={style.product_img_wrap}>
                    <img className={style.product_img_wrap_img} src={props.item.img} alt={props.item.name}/>
                    {onFavClicked
                        ?
                        <div className={style.heart}>
                            <AiFillHeart
                                className={style.her}
                                onClick={(e) => onClick(e)}
                            />
                        </div>
                        :
                        isAuth
                            ?
                            <div className={style.heart}>
                                <AiOutlineHeart
                                    className={style.her}
                                    onClick={(e) => {
                                        onClick(e)
                                    }}
                                />
                            </div>
                            :
                            <div className={style.heart}>
                                <AiOutlineHeart
                                    className={style.her}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        setActive(true)
                                    }}
                                />
                            </div>
                    }
                </div>
                <div className={style.product_info}>
                    <div>{props.item.name}</div>
                    <div>{props.item.price} ₽</div>
                </div>
            </Link>
            <Modal active={active} setActive={setActive}>
                <div>Вы не вошли в систему</div>
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
            </Modal>
        </div>
    )
}


export default ProductItem