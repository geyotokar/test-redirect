import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Provider, useSelector} from 'react-redux'
import store, {AppStateType} from './components/REDUX'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Redirect from './components/Login/Redirect'
import GlobalStyles from './styles/global'

const App: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppHasProvider/>
        </Provider>
    </BrowserRouter>
}

const AppHasProvider: React.FC = () => {
    const isAuth = useSelector((state: AppStateType) => state.isAuth)
    return <>
        <div className='app-wrapper'>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/profile' element={isAuth ? <Profile/> : <Redirect/>}/>
                <Route path='/news/' element={<News/>}/>
            </Routes>
        </div>
        <GlobalStyles/>
    </>
}

export default App