import React from 'react';
import style from './ProductItem.module.scss'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setChosenProduct} from "../../../redux/slices/catalogSlice";

const ProductItem = (props) => {

    const dispatch = useDispatch()

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
                </div>
                <div className={style.product_info}>
                    <div>{props.item.name}</div>
                    <div>{props.item.price} ₽</div>
                </div>
            </Link>
        </div>
    );
};


export default ProductItem