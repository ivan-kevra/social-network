import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogType, MessageType} from "../../index";

type DialogsPropsType = {
    messages: MessageType[]
    dialogs: DialogType[]
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogs.map((dialog) => {
                    return (
                        <DialogItem id={dialog.id} name={dialog.name}/>
                    )
                })}
            </div>
            <div className={style.messages}>
                {props.messages.map((message) => {
                    return (
                        <Message id={message.id} message={message.message}/>
                    )
                })}
            </div>
        </div>
    );
};

