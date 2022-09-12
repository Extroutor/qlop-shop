import React from 'react';
import style from './ProductItem.module.css'
import {Link} from "react-router-dom";


const ProductItem = (props) => {
    return (
        <Link to={`/product/${props.item.id}`} style={{textDecoration: 'none'}}>
            <div className={style.product}>
                <div className={style.product_wrap}>
                    <img className={style.product_img} src={props.item.img} alt={props.item.name}/>
                    <div className={style.product_info}>
                        <div className={style.product_name}>{props.item.name}</div>
                        <div>{props.item.price} руб.</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;