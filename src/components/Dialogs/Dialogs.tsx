import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

export const Dialogs = () => {
    const dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ]
    const messages = [
        {id: 1, message: 'message 1'},
        {id: 2, message: 'message 2'},
        {id: 3, message: 'message 3'},
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs.map((dialog) => {
                    return (
                        <DialogItem id={dialog.id} name={dialog.name}/>
                    )
                })}
            </div>
            <div className={style.messages}>
                {messages.map((message) => {
                    return (
                        <Message id={message.id} message={message.message}/>
                    )
                })}
            </div>
        </div>
    );
};

