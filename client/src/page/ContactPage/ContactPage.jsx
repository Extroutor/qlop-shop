import React from 'react';
import st from './ContactPage.module.scss';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useEffect} from "react";

const ContactPage = () => {

    useEffect(() => {
        document.title = "Контакты | Qlop"
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={st.wrapper}>
            <div className={st.main_wrapper}>
                <h1 className={st.main_title}>Контакты</h1>
                <div className={st.contact_wrap}>
                    <div className={st.logo}>
                        <div>QLOP</div>
                    </div>
                    <div className={st.info}>
                        <div className={st.address}>Университет ИТМО, Кронверкский пр., д.49, лит. А, Санкт-Петербург,
                            Российская Федерация, 197101
                        </div>
                        <div className={st.time}>Телефоны:<br/> Отдел управления
                            делопроизводством (канцелярия): <br/>+ 7 (812)
                            480-00-00; <br/> Ректорат: +7 (812) 607-02-83
                        </div>

                    </div>

                </div>
            </div>
            <YMaps query={{
                ns: 'use-load-option',
                load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
            }}>
                <Map
                    width='100%'
                    height='300px'
                    defaultState={{
                        center: [59.956939, 30.310081],
                        zoom: 15,
                        controls: ['zoomControl', 'fullscreenControl']
                    }}>
                    <Placemark defaultGeometry={[59.956939, 30.310081]} properties={{
                        balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system'
                    }}/>
                </Map>
            </YMaps>
        </div>
    )
}

export default ContactPage;
