import React from "react";
import style from './Header.module.css'


export const Header = (props: any) => {
    return (
        <header className={style.header}>
            <img src='https://gambolthemes.net/workwise-new/images/logo.png'/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logoutTC}>Logout</button></div>
                    : <button onClick={props.login}>Login</button>
                }
            </div>
        </header>
    )
}