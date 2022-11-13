import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import st from './AuthPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registration, signIn} from "../../redux/slices/userSlice";
import {useEffect} from "react";

const AuthPage = () => {
    const [data, setData] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    // Хук для получения строки запроса
    const location = useLocation()
    const navigate = useNavigate();
    // True, если маршрут совпадает с LOGIN_ROUTE
    const isLogIn = location.pathname === '/auth'
    const isAuth = useSelector(state => state.user.isAuth)
    const [err, setErr] = useState(false)

    useEffect(() => {
        document.title = 'Авторизация | QLOP'
        window.scrollTo(0, 0);
    }, [])


    useEffect(() => {
        window.scrollTo(0, 0);
        if (isAuth) {
            setErr(false)
            navigate('/catalog')
        }
    }, [isAuth, err])

    const onAuthClick = () => {
        if (isLogIn) {
            dispatch(signIn(data))
        } else {
            dispatch(registration(data))
        }
        setTimeout(() => {
            if (!isAuth)
                setErr(true)
        }, 100)

    }

    return (
        <div className={st.auth_wrapper}>
            {isLogIn
                ?
                <div className={st.main_wrapper}>
                    <h1 className={st.main_title}>Вход</h1>
                    {err
                        ?
                        <p className={st.wrong__text}>Неправильный логин или пароль</p>
                        :
                        <p className={st.wrong__text}
                           style={{color: "transparent"}}>Неправильный логин или пароль</p>
                    }
                    <div className={st.form}>
                        <input
                            className={st.main_input}
                            type='email'
                            placeholder='Введите email...'
                            value={data.email}
                            onChange={e => {
                                setData({...data, email: e.target.value})
                                setErr(false)
                            }}
                        />
                        <input
                            className={st.main_input}
                            type='password'
                            placeholder='Введите пароль...'
                            value={data.password}
                            onChange={e => setData({...data, password: e.target.value})}
                        />
                    </div>
                    <p className={st.question}>Нет аккаунта? <Link
                        style={{color: '#646C54'}}
                        to='/registration'> Зарегистрируйтесь</Link></p>
                    <div className={st.butt}>
                        <button className={st.button} onClick={onAuthClick}>Войти</button>
                    </div>
                </div>
                :
                <div className={st.main_wrapper}>
                    <h1 className={st.main_title}>Регистрация</h1>
                    <div className={st.form_reg}>
                        <input
                            className={st.main_input}
                            type='text'
                            placeholder='Введите имя...'
                            value={data.name}
                            onChange={e => setData({...data, name: e.target.value})}
                        />
                        <input
                            className={st.main_input}
                            type='text'
                            placeholder='Введите фамилию...'
                            value={data.surname}
                            onChange={e => setData({...data, surname: e.target.value})}
                        />
                        <input
                            className={st.main_input}
                            type='email'
                            placeholder='Введите email...'
                            value={data.email}
                            onChange={e => setData({...data, email: e.target.value})}
                        />
                        <input
                            className={st.main_input}
                            type='password'
                            placeholder='Введите пароль...'
                            value={data.password}
                            onChange={e => setData({...data, password: e.target.value})}
                        />
                    </div>
                    <p className={st.question}>Есть аккаунт? <Link
                        style={{color: '#646C54'}}
                        to='/auth'>Войдите</Link></p>
                    <div className={st.butt}>
                        <button className={st.button} onClick={onAuthClick}>Зарегистрироваться</button>
                    </div>
                </div>
            }
        </div>
    )
};

export default AuthPage;