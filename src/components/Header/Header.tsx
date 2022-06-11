import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {actions, AppStateType} from '../REDUX'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {devices} from '../../styles/global'
import {NavBar, Button} from '../../styles/components'
import './Header.css'

const Header: React.FC = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state: AppStateType) => state.isAuth)
    const logout = () => dispatch(actions.logout())
    return <NavBar>
        <div className='navItem'><NavLink to='/'>НА ГЛАВНУЮ</NavLink></div>
        <div className='navItem'><NavLink to='/news'>НОВОСТИ</NavLink></div>
        <div className='navItem'><NavLink to='/profile'>ПРОФИЛЬ</NavLink></div>
        {isAuth ?
            <LoginButton onClick={logout}>Выйти</LoginButton> :
            <LoginButton><NavLink to='/login'>Войти</NavLink></LoginButton>}
    </NavBar>
}

export default Header

const LoginButton = styled(Button)`
  @media ${devices.mobile} {
    visibility: hidden
  };
  @media ${devices.tablet} {
    visibility: visible
  };
`