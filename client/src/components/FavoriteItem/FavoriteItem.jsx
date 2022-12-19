import React from 'react';
import style from './FavoriteItem.module.scss';
import {Link} from "react-router-dom";
import {setChosenProduct} from "../../redux/slices/catalogSlice";
import {AiOutlineClose} from "react-icons/ai";
import {deleteItemFromFav} from "../../redux/slices/userSlice";
import {useDispatch} from "react-redux";
import Modal from "../Modal/Modal";
import {useState} from "react";
import Cookie from "universal-cookie";
import {deleteFavItem} from "../../api/shopApi";

const FavoriteItem = (props) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    const onClick = (e) => {
        const cookie = new Cookie()
        let id = cookie.get('id')
        deleteFavItem(id, props.item.productId).then(() => {
                console.log('bbb')
                dispatch(deleteItemFromFav(props.item.productId))
                setActive(false)
            }
        )
    }

    return (
        <div className={style.product}>
            <Link
                className={style.product_link}
                to={`/product/${props.item.productId}`}
                onClick={() => {
                    dispatch(setChosenProduct(props.item))
                }}
            >
                <div className={style.product_img_wrap}>
                    <img className={style.product_img_wrap_img} src={props.item.productInfo.img}
                         alt={props.item.productInfo.name}/>
                    <div className={style.heart}
                    >
                        <AiOutlineClose
                            className={style.her}
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setActive(true)
                            }}
                        />
                    </div>
                </div>
                <div className={style.product_info}>
                    <div className={style.product_name}>{props.item.productInfo.name}</div>
                    <div>{props.item.productInfo.price} ₽</div>
                </div>
            </Link>
            <Modal active={active} setActive={setActive}>
                <div className={style.text}>Вы действительно хотите удалить этот товар?</div>
                <div className={style.button_wrapper}>
                    <button
                        className={style.button}
                        onClick={(e) => onClick(e)}
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
    );
};

export default FavoriteItem;