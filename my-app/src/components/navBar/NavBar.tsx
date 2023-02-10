import React from "react";
import style from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><a href='/profile'>Profile</a></div>
            <div className={`${style.item} ${style.active}`}><a href='/dialogs'>Messages</a></div>
            <div className={style.item}><a>News</a></div>
            <div className={style.item}><a>Music</a></div>
            <div className={style.item}><a>Settings</a></div>
        </nav>
    )
}