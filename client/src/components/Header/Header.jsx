import React, {useState} from 'react';
import {IoBasketOutline, IoMenuSharp} from "react-icons/io5";
import {Link, useNavigate} from "react-router-dom";
import './Header.scss'
import {changeCategory} from "../../redux/slices/catalogSlice";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineClose} from "react-icons/ai";
import MenuBurger from "./MenuBurger";
import {CgProfile} from "react-icons/cg";
import {exit} from "../../redux/slices/userSlice";
import st from "../Modal/Modal.module.scss";
import Modal from "../Modal/Modal";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false)
    const [active, setActive] = useState(false)
    let categoryList = useSelector(state => state.catalog.categoryList)
    let dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    const count = useSelector(state => state.user.basket.length)
    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='wrapper'>
                <div className='left_side'>
                    <div className='header_title'>
                        <Link onClick={() =>
                            setMenuActive(false)}
                              to='./'>QLOP</Link></div>
                    <ul className='header_category'>
                        {categoryList.map(item => {
                            return <li key={item.id}>
                                <Link
                                    className='header_category_item'
                                    to={`/catalog/${item.id}`}
                                    onClick={() => dispatch(changeCategory(item.id))}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
                <div className={isAuth ? 'right_side_auth' : 'right_side_authh'}>
                    {isAuth
                        ?
                        <div className='right_wrapper auth'>
                            <span className='drop_main'>
                                <Link to='/user'>
                                <CgProfile className='icon'/>
                            </Link>
                                <div className='drop'>
                                <ul>
                                    <Link to='/'>
                                        <li>Профиль</li>
                                    </Link>
                                    <Link to='/order'>
                                        <li>Мои заказы</li>
                                    </Link>
                                    <Link to='/favorite'>
                                        <li>Избранные</li>
                                    </Link>
                                    <div style={{cursor: 'pointer'}} onClick={() => {
                                        setActive(true)
                                    }}>
                                        <li>Выйти</li>
                                    </div>
                                </ul>
                            </div>
                            </span>
                            <div className='right_wrapper'>
                                <Link to='/basket'
                                      onClick={() => setMenuActive(false)}
                                >
                                    <IoBasketOutline className='icon'/>
                                </Link>
                                <div className='count'> :{count}</div>
                            </div>
                        </div>
                        :
                        <div className='right_wrapper'>
                            <Link to='/auth'>
                                <div className='login'>ВОЙТИ</div>
                            </Link>
                            <Link to='/basket'
                                  onClick={() => setMenuActive(false)}
                                  className='basket_wr'
                            >
                                <IoBasketOutline className='icon'/>
                                <div className='count'> :{count}</div>
                            </Link>
                        </div>
                    }
                </div>
                {/* For mobile version: */}
                <div className='burger-wrap'>
                    {menuActive
                        ?
                        <AiOutlineClose
                            className='icon'
                            onClick={() => setMenuActive(!menuActive)}
                        />
                        :
                        <IoMenuSharp
                            className='icon'
                            onClick={() => setMenuActive(!menuActive)}
                        />
                    }
                </div>
            </div>
            <MenuBurger
                menuActive={menuActive}
                setMenuActive={setMenuActive}
                items={categoryList}
                isAuth={isAuth}
            />
            {/* todo ОБЩИЕ СТИЛИ ДЛЯ КНОПОК И ТД*/}
            <Modal active={active} setActive={setActive}>
                <div className={st.text}>Вы действительно хотите выйти из системы?</div>
                <div className={st.button_wrapper}>
                    <button
                        className={st.button}
                        onClick={() => {
                            dispatch(exit())
                            navigate('/')
                            setActive(false)
                        }
                        }
                    >Да
                    </button>

                    <button
                        className={[st.button, st.button_not].join(' ')}
                        onClick={() => setActive(false)}
                    >Нет
                    </button>
                </div>

            </Modal>
        </div>
    )
}

export default Header