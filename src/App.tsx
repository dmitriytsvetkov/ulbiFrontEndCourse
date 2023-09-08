import {Suspense, useContext, useState} from 'react'
import './styles/index.scss'
import {Route, Routes, Link} from 'react-router-dom'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}></Route>
                    <Route path="/about" element={<AboutPageAsync/>}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
