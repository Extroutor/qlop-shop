import React, {useState} from 'react';
import {IoBasketOutline, IoMenuSharp} from "react-icons/io5";
import {Link} from "react-router-dom";
import './Header.scss'
import {changeCategory} from "../../redux/slices/catalogSlice";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineClose, AiOutlineHeart} from "react-icons/ai";
import MenuBurger from "./MenuBurger";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false)
    let categoryList = useSelector(state => state.catalog.categoryList)
    let dispatch = useDispatch()
    const isAuth = true

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
                {isAuth
                    ?
                    <div className='right_side_auth'>
                        <Link to='/favorite'
                              onClick={() => setMenuActive(false)}
                        >
                            <AiOutlineHeart className='basket'/>
                        </Link>
                        <Link to='/basket'
                              onClick={() => setMenuActive(false)}
                        >
                            <IoBasketOutline className='basket'/>
                        </Link>
                    </div>
                    :
                    <div className='right_side'>
                        <Link to='/basket'
                              onClick={() => setMenuActive(false)}
                        >
                            <IoBasketOutline className='basket'/>
                        </Link>
                    </div>
                }
                {/* For mobile version: */}
                <div className='burger-wrap'>
                    {menuActive
                    ?
                        <AiOutlineClose
                            className='burger'
                            onClick={() => setMenuActive(!menuActive)}
                        />
                    :
                        <IoMenuSharp
                            className='burger'
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
        </div>
    );
};

export default Header