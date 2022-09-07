import React from 'react';
import {AiOutlineClose} from "react-icons/ai";

const BasketItem = () => {
    return (
        <div className='product_item'>
            <div className='group1'>
                <div className='img_wrapper'>
                    <img className='img' src='https://static.diary.ru/userdir/6/8/7/6/687665/29160535.jpg' alt='img'/>
                </div>
                <div className='basket_item_title'>
                    <p>НазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвание</p>
                </div>
            </div>
            <div className='group2'>
                <div>price</div>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
                <div>total price</div>
                <AiOutlineClose style={{width: '30px', height:'30px', cursor:'pointer'}}/>
            </div>
            </div>

    );
};

export default BasketItem;