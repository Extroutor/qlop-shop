import React from 'react';

const ProductItem = ({item}) => {
    return (
        <div className='product'>
            <div className='product_wrap'>
                <img className='product_img' src={item.img} alt={item.name}/>
                <div className='product_info'>
                    <div className='product_name'>{item.name}</div>
                    <div>{item.price}</div>
                </div>
            </div>


        </div>
    );
};

export default ProductItem;