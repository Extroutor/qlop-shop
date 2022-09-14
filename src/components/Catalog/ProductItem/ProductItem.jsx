import React from 'react';
import style from './ProductItem.module.scss'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setChosenProduct} from "../../../redux/actions";

const ProductItem = (props) => {
    return (
        <div className={style.product}>
            <Link
                className={style.product_link}
                to={`/product/${props.item.id}`}
                onClick={() => {
                    props.setChosenProduct(props.item)
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

const mapDispatchToProps = (dispatch) => {
    return {
        setChosenProduct: (item) => {
            return dispatch(setChosenProduct(item))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);