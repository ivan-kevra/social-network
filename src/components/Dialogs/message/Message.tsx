import style from "./Message.module.css";
import React from "react";

type MessagePropsType = {
    id: number
    message: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}