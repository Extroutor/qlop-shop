import React from 'react';
import logo from "./assets/logo.png";
import {IoBasket} from "react-icons/io5";

const Header = () => {
    return (
        <div>
            <header className='header'>
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div>
                    <IoBasket className='basket'/>
                </div>
            </header>
            <hr noshade='true' width='100%'/>
        </div>
    );
};

export default Header;