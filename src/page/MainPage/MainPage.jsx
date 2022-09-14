import React from 'react';
import bg from '../../assets/main-page-bg.jpg'
import './MainPage.scss'

const MainPage = () => {
    return (
        <>
            <div className='main_bg'>
                <img className='main_bg_img' src={bg} alt='bg'/>
            </div>
            <div className='main_title'>Найди свой стиль</div>
        </>
    );
};

export default MainPage;