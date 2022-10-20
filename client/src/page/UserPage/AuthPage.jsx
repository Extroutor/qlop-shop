import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import './AuthPage.scss'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registration, signIn} from "../../redux/slices/userSlice";
import {useEffect} from "react";

const AuthPage = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    // Хук для получения строки запроса
    const location = useLocation()
    const navigate = useNavigate();
    // True, если маршрут совпадает с LOGIN_ROUTE
    const isLogIn = location.pathname === '/auth'

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const onAuthClick = () => {
        if (isLogIn) {
            dispatch(signIn())
        } else {
            dispatch(registration())
        }
        navigate('/catalog')
    }

    return (
        <div className='auth_wrapper'>
            {isLogIn
                ?
                <div className='main_wrapper'>
                    <h1 className='main-title'>Вход</h1>
                    <div className='form'>

                        <input
                            className='main_input'
                            type='email'
                            placeholder='Введите email...'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className='main_input'
                            type='password'
                            placeholder='Введите пароль...'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <p>Нет аккаунта? <br/><Link
                        style={{color: '#646C54'}}
                        to='/registration'>Зарегистрируйтесь</Link></p>
                    <div className='butt'>
                        <button onClick={() => onAuthClick()}>Войти</button>
                    </div>
                </div>
                :
                <div className='main_wrapper'>
                    <h1 className='main-title'>Регистрация</h1>
                    <div className='form'>

                        <input
                            className='main_input'
                            type='text'
                            placeholder='Введите имя...'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            className='main_input'
                            type='text'
                            placeholder='Введите фамилию...'
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                        />
                        <input
                            className='main_input'
                            type='email'
                            placeholder='Введите email...'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className='main_input'
                            type='password'
                            placeholder='Введите пароль...'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <p>Есть аккаунт? <Link
                        style={{color: '#646C54'}}
                        to='/auth'>Войдите</Link></p>
                    <div className='butt'>
                        <button onClick={onAuthClick}>Зарегистрироваться</button>
                    </div>
                </div>
            }
        </div>
    )
};

export default AuthPage;