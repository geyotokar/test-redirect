import React, {useEffect} from 'react'
import {Content} from '../../styles/components'
import {useNavigate} from 'react-router-dom'
import Preloader from '../../assets/Preloader'
import {useSelector} from 'react-redux'
import {AppStateType} from '../REDUX'

const Redirect: React.FC = () => {
    const navigate = useNavigate()
    const isAuth = useSelector((state: AppStateType) => state.isAuth)
    useEffect(() => {
        if (!isAuth) {
            navigate('/login', {replace: true})
        } else {
            navigate('/profile', {replace: true})
        }
    })
    return <Content align='center'>
        <Preloader/>
    </Content>
}

export default Redirect