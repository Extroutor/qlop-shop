import React from 'react';
import style from './ProductItem.module.scss'
import {Link} from "react-router-dom";


const ProductItem = (props) => {
    return (
            <div className={style.product}>
                <Link to={`/product/${props.item.id}`} style={{textDecoration: 'none'}}>
                <div className={style.product_wrap}>
                    <div className={style.product_img_wrap}>
                        <img className={style.product_img_wrap_img} src={props.item.img} alt={props.item.name}/>
                    </div>
                    <div className={style.product_info}>
                        <div>{props.item.name}</div>
                        <div>{props.item.price} ₽</div>
                    </div>
                </div>
                </Link>
            </div>
    );
};

export default ProductItem;