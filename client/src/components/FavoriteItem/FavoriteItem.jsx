import React from 'react';
import style from './FavoriteItem.module.scss';
import {Link} from "react-router-dom";
import {setChosenProduct} from "../../redux/slices/catalogSlice";
import {AiOutlineClose} from "react-icons/ai";
import {deleteFromFav} from "../../redux/slices/userSlice";
import {useDispatch} from "react-redux";
import Modal from "../Modal/Modal";
import {useState} from "react";

const FavoriteItem = (props) => {
    const [active, setActive] = useState(false);


    const dispatch = useDispatch();

    const onClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(deleteFromFav(props.item))
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
                    <div>{props.item.name}</div>
                    <div>{props.item.price} ₽</div>
                </div>
            </Link>
            <Modal active={active} setActive={setActive}>
                <div>Вы действительно хотите удалить этот товар?</div>
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
            </Modal>
        </div>
    );
};

export default FavoriteItem;