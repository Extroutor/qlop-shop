import React, {useEffect, useState} from 'react';
import style from './ProfilePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {exit, setAuth, setChanges} from "../../../redux/slices/userSlice";
import Modal from "../../../components/Modal/Modal";
import {Link, useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";

const ProfilePage = () => {
    const userInfo = useSelector(state => state.user.userData)
    const [active, setActive] = useState(false)
    let [name, setName] = useState(userInfo.name)
    let [surname, setSurname] = useState(userInfo.surname)
    let [date, setDate] = useState(userInfo.date)
    let [isChange, setIsChange] = useState(false)
    let [isSettings, setIsSettings] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let cookie = new Cookies()

    useEffect(() => {
        document.title = "Мой профиль | Qlop"
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className={style.wrap}>
            <h1 className={style.title}>Мой профиль</h1>
            <div className={style.links_wrap}>
                <div className={style.links}><Link to='../favorite'>Избранные</Link></div>
                <div className={style.links}><Link to='../order'>Заказы</Link></div>
            </div>
            <div className={style.form_wrap}>
                <div className={style.form}>
                    <div style={{fontWeight: '700'}}>Имя</div>
                    <input
                        className={style.main_input}
                        value={name}
                        onChange={(e) => {
                            setIsSettings(true)
                            setIsChange(false)
                            setName(e.target.value)
                        }}
                    />
                    <div style={{fontWeight: '700'}}>Фамилия</div>
                    <input
                        className={style.main_input}
                        value={surname}
                        onChange={(e) => {
                            setIsSettings(true)
                            setIsChange(false)
                            setSurname(e.target.value)
                        }}
                    />
                    <div style={{fontWeight: '700'}}>Email</div>
                    <div
                        className={style.main_input}>{userInfo.email}</div>
                    <div style={{fontWeight: '700'}}>Дата рождения</div>
                    <input
                        type='date'
                        className={style.main_input}
                        value={userInfo.date}
                        style={{width: '80%'}}
                        onChange={(e) => {
                            setIsSettings(true)
                            setIsChange(false)
                            setDate(e.target.value)
                        }}
                    />
                </div>
                {isSettings
                ?
                    <div className={style.save_settings} onClick={() => {
                        setIsSettings(false)
                        setIsChange(true)
                        dispatch(setChanges({name, surname, date}))
                    }}>Сохранить изменения</div>
                    :
                    <></>
                }
                {isChange
                    ?
                    <div className={style.done_settings}>Изменения сохранены</div>
                    :
                    <></>
                }

            </div>
            <div className={style.exit_wrap}>
                <div className={style.exit} onClick={() => setActive(true)}>Выйти</div>
            </div>
            <Modal active={active} setActive={setActive}>
                <div className={style.text}>Вы действительно хотите выйти из системы?</div>
                <div className={style.button_wrapper}>
                    <button
                        className={style.button}
                        onClick={() => {
                            cookie.remove('token')
                            cookie.remove('id')
                            dispatch(setAuth(false))
                            navigate('/')
                            setActive(false)
                        }
                        }
                    >Да
                    </button>

                    <button
                        className={[style.button, style.button_not].join(' ')}
                        onClick={() => setActive(false)}
                    >Нет
                    </button>
                </div>

            </Modal>

        </div>
    );
};

export default ProfilePage;