import React from "react";
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {Sidebar} from "./sidebar/Sidebar";
import {store} from "../../redux/store";


export const Navbar = () => {

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to={'/profile'}
                         className={({isActive}) => isActive ? style.active : undefined}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/dialogs'}
                         className={({isActive}) => isActive ? style.active : undefined}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/news'}
                         className={({isActive}) => isActive ? style.active : undefined}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/music'}
                         className={({isActive}) => isActive ? style.active : undefined}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/settings'}
                         className={({isActive}) => isActive ? style.active : undefined}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={'/users'}
                         className={({isActive}) => isActive ? style.active : undefined}>Users</NavLink>
            </div>
            <div>
                <Sidebar friends={store.getState().sidebar.friends}/>
            </div>
        </nav>
    )
}