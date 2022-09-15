import React from 'react';
import './ProductItemPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {addToBasket} from "../../redux/slices/userSlice";

const ProductItemPage = () => {

    const chosenProduct = useSelector(state => state.catalog.chosenProduct)
    console.log(chosenProduct)
    const dispatch = useDispatch()
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
                <button
                    className='button'
                    onClick={() => dispatch(addToBasket(chosenProduct))}
                >
                    В корзину
                </button>
                <button className='button fav'>В избранные</button>
            </div>
        </div>
    );
};

export default ProductItemPage