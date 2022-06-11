import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {JustifyContent, SecondaryText} from '../../styles/components'
import {actions, AppStateType} from '../REDUX'
import LoginForm from './LoginForm'

const Login: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector((state: AppStateType) => state.isAuth)
    const login = () => dispatch(actions.login())
    useEffect(() => {
        if (isAuth) {
            navigate('/profile')
        }
    }, [isAuth, navigate])
    return <JustifyContent align='center'>
        <h4>Добро пожаловать!</h4>
        <LoginForm login={login}/>
        <SecondaryText>
            <h5>Тсс... Вот подсказка:</h5>
            <div>логин: Admin</div>
            <div>пароль: 12345</div>
        </SecondaryText>
    </JustifyContent>
}

export default Login