import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
    avatar: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = `${/dialogs/}${props.id}`
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <img src={props.avatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}