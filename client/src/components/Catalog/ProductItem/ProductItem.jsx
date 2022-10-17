import React, {useState} from 'react';
import style from './ProductItem.module.scss'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setChosenProduct} from "../../../redux/slices/catalogSlice";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {addToFav, deleteFromFav} from "../../../redux/slices/userSlice";

const ProductItem = (props) => {
        const [onFavClicked, setOnFavClicked] = useState(false)

        const dispatch = useDispatch()

        const onClick = (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (onFavClicked) {
                dispatch(deleteFromFav(props.item))
            }
            dispatch(addToFav(props.item))
            setOnFavClicked(!onFavClicked)
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
                        {onFavClicked
                            ?
                            <div className={style.heart}
                            >
                                <AiFillHeart
                                    className={style.her}
                                    onClick={(e) => onClick(e)}
                                />
                            </div>
                            :
                            <div className={style.heart}
                            >
                                <AiOutlineHeart
                                    className={style.her}
                                    onClick={(e) => onClick(e)}
                                />
                            </div>
                        }

                    </div>


                    <div className={style.product_info}>
                        <div>{props.item.name}</div>
                        <div>{props.item.price} ₽</div>
                    </div>
                </Link>
            </div>
        );
    }
;


export default ProductItem