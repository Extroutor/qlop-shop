import React, {useState} from 'react';
import style from './ProductItem.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setChosenProduct} from "../../../redux/slices/catalogSlice";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {addToFav, deleteFromFav, deleteItemFromFav, setFavorite} from "../../../redux/slices/userSlice";
import Modal from "../../Modal/Modal";
import st from "../../Modal/Modal.module.scss";
import Cookie from "universal-cookie";
import {addFavItem, deleteFavItem} from "../../../api/shopApi";

const ProductItem = (props) => {
    const [onFavClicked, setOnFavClicked] = useState(false)
    const [active, setActive] = useState(false);
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const cookie = new Cookie()

    const onClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let id = cookie.get('id')
        if (onFavClicked) {
            deleteFavItem(id, props.item.id).then(() => {
                    dispatch(deleteItemFromFav(props.item.productId))
                    setOnFavClicked(!onFavClicked)
                }
            )
        } else {
            console.log(props.item)
            addFavItem(id, props.item.id).then(() => {
                dispatch(setFavorite(props.item))
                setOnFavClicked(!onFavClicked)
            })
        }
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
                    <div className={style.product_name}>{props.item.name}</div>
                    <div>{props.item.price} ₽</div>
                </div>
            </Link>
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
    )
}


export default ProductItem