import React from 'react';
import {IoBasketOutline, IoMenuSharp} from "react-icons/io5";
import {Link} from "react-router-dom";
import './Header.scss'
import {changeCategory} from "../../redux/slices/catalogSlice";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineHeart} from "react-icons/ai";

const Header = () => {

    let categoryList = useSelector(state => state.catalog.categoryList)
    let dispatch = useDispatch()
    const isAuth = true

    return (
        <div className='header'>
            <div className='wrapper'>
                <div className='left_side'>
                    <div className='header_title'><Link to='./'>QLOP</Link></div>
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
                        <Link to='/favorite'>
                            <AiOutlineHeart className='basket'/>
                        </Link>
                        <Link to='/basket'>
                            <IoBasketOutline className='basket'/>
                        </Link>
                    </div>
                :
                    <div className='right_side'>
                        <Link to='/basket'>
                            <IoBasketOutline className='basket'/>
                        </Link>
                    </div>
                }
                {/* For mobile version: */}
                <div className='burger-wrap'>
                    <IoMenuSharp className='burger'/>
                </div>
            </div>
        </div>
    );
};

export default Header