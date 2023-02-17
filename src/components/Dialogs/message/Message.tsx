import style from "./Message.module.css";
import React from "react";

type MessagePropsType = {
    id: number
    message: string
    userId: number
    avatar: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={props.userId === 1 ? style.message2 : style.message}>
            <img src={props.avatar}/>
            {props.message}
        </div>
    )
}