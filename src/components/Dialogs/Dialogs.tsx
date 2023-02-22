import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";

type dialogsStatePropsType = {
    dialogsState: DialogsPageType
    dispatch: any
    newMessageText: string

}

export const Dialogs: React.FC<dialogsStatePropsType> = (props) => {
    const dialogs = props.dialogsState.dialogs.map((dialog) => {
        return (
            <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>
        )
    })
    const messages = props.dialogsState.messages.map((message) => {
        return (
            <Message key={message.id}
                     id={message.id}
                     message={message.message}
                     userId={message.userId}
                     avatar={message.avatar}/>
        )
    })
    const addMessageHandler = () => {
        props.dispatch(addMessageAC())
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(event.currentTarget.value))
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>{dialogs}</div>
            <div className={style.messages}>{messages}</div>
            <div>
                <textarea placeholder={'Enter your message'} value={props.newMessageText} onChange={onChangeHandler}></textarea>
                <button onClick={addMessageHandler}>add Message</button>
            </div>

        </div>
    );
};

