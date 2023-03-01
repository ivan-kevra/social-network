import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props: any) => {
    return (
        <header className={style.header}>
            <img
                src='https://gambolthemes.net/workwise-new/images/logo.png'/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}