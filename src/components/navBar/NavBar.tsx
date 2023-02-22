import React from "react";
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {Sidebar} from "./sidebar/Sidebar";
import {SidebarType} from "../../redux/store";
import {StoreContext} from "../../StoreContext";


type NavBarPropsType = {
    // navbar: SidebarType
}

export const NavBar: React.FC<NavBarPropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
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
                            <div>
                                <Sidebar friends={store.getState().sidebar.friends}/>
                            </div>
                        </nav>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}