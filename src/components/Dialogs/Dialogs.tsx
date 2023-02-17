import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../../redux/state";

type dialogsStatePropsType = {
    dialogsState: DialogsPageType
}

export const Dialogs: React.FC<dialogsStatePropsType> = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogsState.dialogs.map((dialog) => {
                    return (
                        <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>
                    )
                })}
            </div>
            <div className={style.messages}>
                {props.dialogsState.messages.map((message) => {
                    return (
                        <Message id={message.id}
                                 message={message.message}
                                 userId={message.userId}
                                 avatar={message.avatar}/>
                    )
                })}
            </div>
        </div>
    );
};

