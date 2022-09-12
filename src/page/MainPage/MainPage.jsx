import React from 'react';
// import bg from '../../assets/bg.jpg'
import bg from '../../assets/main-page-bg.jpg'

import './MainPage.scss'

const MainPage = () => {
    return (
        <div>
            <div className='main_bg'>
                <img className='main_bg_img' src={bg} alt='bg'/>
            </div>
            <div className='main_title'>Найди свой стиль</div>
        </div>
    );
};

export default MainPage;