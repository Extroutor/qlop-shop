import React, {useState} from 'react';
import {IoBasketOutline, IoMenuSharp} from "react-icons/io5";
import {Link} from "react-router-dom";
import './Header.scss'
import {changeCategory} from "../../redux/slices/catalogSlice";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineClose} from "react-icons/ai";
import MenuBurger from "./MenuBurger";
import {CgProfile} from "react-icons/cg";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false)
    let categoryList = useSelector(state => state.catalog.categoryList)
    let dispatch = useDispatch()
    const isAuth = false

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
                <div className='right_side_auth'>
                    {isAuth
                        ?
                        <div className='right_wrapper auth'>
                            <Link to='/user'>
                                <CgProfile className='icon'/>
                            </Link>
                            <Link to='/basket'
                                  onClick={() => setMenuActive(false)}
                            >
                                <IoBasketOutline className='icon'/>
                            </Link>
                        </div>
                        :
                        <div className='right_wrapper'>
                            <Link to='/auth'>
                                <div className='icon'>ВОЙТИ</div>
                            </Link>
                            <Link to='/basket'
                                  onClick={() => setMenuActive(false)}
                            >
                                <IoBasketOutline className='icon'/>
                            </Link>
                        </div>
                    }
                </div>
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
            <MenuBurger
                menuActive={menuActive}
                setMenuActive={setMenuActive}
                items={categoryList}
                isAuth={isAuth}
            />
        </div>
    )
}

export default Header