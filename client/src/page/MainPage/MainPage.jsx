import React from 'react';
import bg from '../../assets/main-page-bg.jpg'
import sec from '../../assets/bg.jpg'
import thr from '../../assets/vesh.jpg'
import './MainPage.scss'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {viewAllProducts} from "../../redux/slices/catalogSlice";
import {useDispatch} from "react-redux";
import Header from "../../components/Header/Header";

const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = "Главная | Qlop"
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className='main_bg'>
                <img className='main_bg_img' src={bg} alt='bg'/>
            </div>
            <div className='main_title'>Найди свой стиль</div>
            <Link to='/catalog' className='butt-div'
                  onClick={() => dispatch(viewAllProducts())}
            >
                <button>Начать шоппинг</button>
            </Link>
            <div className='main_bg'>
                <img className='main_bg_img' src={sec} alt='bg'/>
            </div>
            <div className='main_title sec_text'>Онлайн магазин модной одежды</div>
            <div className='main_bg'>
                <img className='main_bg_img' src={thr} alt='bg'/>
            </div>
        </>
    );
};

export default MainPage;