import React from 'react';
import './Footer.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className='footer_title'><Link to='./'>QLOP</Link></div>
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
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