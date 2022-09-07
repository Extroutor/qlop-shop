import React from 'react';
import logo from "../assets/logo.png";
import {IoBasket} from "react-icons/io5";
import {Link, useLocation} from "react-router-dom";


const Header = () => {

    const location = useLocation()
    const isBasketPage = location.pathname === '/basket'
    return (
        <div>
            {isBasketPage
            ?
                <header className='header header-basket-page'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={logo} alt='logo'/>
                        </Link>
                    </div>
                </header>
                :
                <header className='header'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={logo} alt='logo'/>
                        </Link>
                    </div>
                    <div>
                        <Link to='/basket'>
                            <IoBasket className='basket'/>
                        </Link>
                    </div>
                </header>

            }
            <hr noshade='true' width='100%'/>
        </div>
    );
};

export default Header;