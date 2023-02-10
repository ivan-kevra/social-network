import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem id={1} name={'user 1'}/>
                <DialogItem id={2} name={'user 2'}/>
                <DialogItem id={3} name={'user 3'}/>
                <DialogItem id={4} name={'user 4'}/>
                <DialogItem id={5} name={'user 5'}/>
                <DialogItem id={6} name={'user 6'}/>
            </div>
            <div className={style.messages}>
                <Message message={'message 1'}/>
                <Message message={'message 2'}/>
                <Message message={'message 3'}/>
            </div>
        </div>
    );
};

