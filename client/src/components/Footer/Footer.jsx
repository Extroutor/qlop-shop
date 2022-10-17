import React from 'react';
import './Footer.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className='footer_title'><Link to='./'>QLOP</Link></div>
            <ul className="menu">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
            </ul>
            <p>197101, Россия
                г. Санкт-Петербург
                Кронверкский проспект, д.49, лит А.
                Университет ИТМО</p>

            <p>©2022 Qlop Shop | All Rights Reserved</p>
        </footer>
    );
}

export default Footer;