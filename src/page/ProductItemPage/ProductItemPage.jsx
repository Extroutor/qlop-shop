import React from 'react';
import './ProductItemPage.scss'
import {connect} from "react-redux";
import {addToBasket} from "../../redux/actions";

const ProductItemPage = (props) => {

    console.log('chosen', props.chosenProduct.name)

    return (
        <div className='product_page'>
            <div className='left_part'>
                <div className='img_wrap'>
                    <img alt={props.chosenProduct.name}
                         src={props.chosenProduct.img}/>
                </div>
            </div>
            <div className='right_part'>
                <div className='title'>{props.chosenProduct.name}</div>
                <div className='price'>{props.chosenProduct.price} ₽</div>
                <button
                    className='button'
                    onClick={() => props.addToBasket(props.chosenProduct)}
                >
                    В корзину
                </button>
                <button className='button fav'>В избранные</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        chosenProduct: state.catalog.chosenProduct,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToBasket: (item) => {
            return dispatch(addToBasket(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemPage);