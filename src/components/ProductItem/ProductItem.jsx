import React from 'react';
import style from './ProductItem.module.css'
import {Link} from "react-router-dom";


const ProductItem = ({item}) => {
    return (
        <Link to={`/product/${item.id}`} style={{textDecoration: 'none'}}>
            <div className={style.product}>
                <div className={style.product_wrap}>
                    <img className={style.product_img} src={item.img} alt={item.name}/>
                    <div className={style.product_info}>
                        <div className={style.product_name}>{item.name}</div>
                        <div>{item.price} руб.</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;