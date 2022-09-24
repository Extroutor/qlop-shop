import React from 'react';
import './MenuBurger.scss'
import {Link} from "react-router-dom";
import {changeCategory} from "../../redux/slices/catalogSlice";
import {useDispatch} from "react-redux";
import {AiOutlineHeart} from "react-icons/ai";
import {IoBasketOutline} from "react-icons/io5";

const MenuBurger = (props) => {
    const dispatch = useDispatch()
    return (
        <div className={props.menuActive ? 'menuu active_menu' : 'menuu'}
             onClick={() => props.setMenuActive(false)}
        >
            <div className='blur'/>

            <div className='menu_content' onClick={e => e.stopPropagation()}>

                <ul className='ull'>
                    {props.items.map(item =>
                        <li key={item.id} className='lii'>
                            <Link
                                to={`/catalog/${item.id}`}
                                onClick={() => {
                                    dispatch(changeCategory(item.id))
                                    props.setMenuActive(!props.menuActive)
                                }}
                            >
                                {item.name}
                            </Link>
                        </li>
                    )}
                </ul>
                {props.isAuth
                    ?
                    <div className='burger_box_auth'>
                        <Link to='/favorite'
                              onClick={() => props.setMenuActive(!props.menuActive)}
                        >
                            <AiOutlineHeart className='basket'/>
                        </Link>
                        <Link to='/basket'
                              onClick={() => props.setMenuActive(!props.menuActive)}
                        >
                            <IoBasketOutline className='basket'/>
                        </Link>
                    </div>
                    :
                    <div className='burger_box'>
                        <Link to='/basket'
                              onClick={() => props.setMenuActive(!props.menuActive)}
                        >
                            <IoBasketOutline className='basket'/>
                        </Link>
                    </div>
                }
            </div>

        </div>
    );
};

export default MenuBurger;