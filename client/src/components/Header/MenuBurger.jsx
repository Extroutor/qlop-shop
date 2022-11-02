import React from 'react';
import './MenuBurger.scss'
import {Link} from "react-router-dom";
import {changeCategory} from "../../redux/slices/catalogSlice";
import {useDispatch, useSelector} from "react-redux";
import {IoBasketOutline} from "react-icons/io5";
import {CgProfile} from "react-icons/cg";

const MenuBurger = (props) => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.user.basket.length)

    return (
        <div className={props.menuActive ? 'menuu active_menu' : 'menuu'}
             onClick={() => props.setMenuActive(false)}
        >
            <div className='blur'/>
            <div className='menu_content' onClick={e => e.stopPropagation()}>
                <div className='menu_wrap_mobile'>
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
                        <div className='right_wrapper_bottom_auth drop_main'>
                            <Link to='/user'>
                                <CgProfile
                                    className='icon'
                                    onClick={() => {
                                        props.setMenuActive(!props.menuActive)
                                    }}
                                />
                            </Link>
                            <div className='drop'>
                                <ul>
                                    <li><Link onClick={() => {
                                        props.setMenuActive(!props.menuActive)
                                    }} to='/'>Профиль</Link></li>
                                    <li><Link onClick={() => {
                                        props.setMenuActive(!props.menuActive)
                                    }} to='/'>Мои заказы</Link></li>
                                    <li><Link onClick={() => {
                                        props.setMenuActive(!props.menuActive)
                                    }} to='/favorite'>Избранные</Link></li>
                                    <li><Link onClick={() => {
                                        props.setMenuActive(!props.menuActive)
                                    }} to='/'>Выйти</Link></li>
                                </ul>
                            </div>
                            <Link to='/basket'
                                  onClick={() => {
                                      props.setMenuActive(!props.menuActive)
                                  }}
                            >
                                <IoBasketOutline className='icon'/>
                            </Link>
                            <div> :{count}</div>
                        </div>
                        :
                        <div className='right_wrapper_bottom'>
                            <Link to='/auth'>
                                <div onClick={() => {
                                    props.setMenuActive(!props.menuActive)
                                }} className='sign'>ВОЙТИ
                                </div>
                            </Link>
                            <Link to='/basket'
                                  onClick={() => {
                                      props.setMenuActive(!props.menuActive)
                                  }}
                                  className='count_burger'
                            >
                                <IoBasketOutline className='icon'/>
                                <div> :{count}</div>
                            </Link>
                        </div>
                    }
                </div>
            </div>


        </div>
    );
};

export default MenuBurger;