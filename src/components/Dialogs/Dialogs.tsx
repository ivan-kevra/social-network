import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogType, DialogsPageType, MessageType} from "../../redux/state";


type dialogsStatePropsType = {
    dialogsState: DialogsPageType
}

export const Dialogs: React.FC<dialogsStatePropsType> = (props) => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogsState.dialogs.map((dialog) => {
                    return (
                        <DialogItem id={dialog.id} name={dialog.name}/>
                    )
                })}
            </div>
            <div className={style.messages}>
                {props.dialogsState.messages.map((message) => {
                    return (
                        <Message id={message.id} message={message.message}/>
                    )
                })}
            </div>
        </div>
    );
};

