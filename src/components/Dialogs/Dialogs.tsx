import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";


type dialogsStatePropsType = {
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
    dialogsPage: InitialStateType
    isAuth: boolean
}

export const Dialogs: React.FC<dialogsStatePropsType> = (props) => {

    let state = props.dialogsPage

    const dialogs = state.dialogs.map((dialog) => {
        return (
            <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>
        )
    })
    const messages = state.messages.map((message) => {
        return (
            <Message key={message.id}
                     id={message.id}
                     message={message.message}
                     userId={message.userId}
                     avatar={message.avatar}/>
        )
    })

    const addMessageHandler = () => {
        props.addMessage()
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(event.currentTarget.value)
    }

    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>{dialogs}</div>
            <div className={style.messages}>{messages}</div>
            <div>
                <textarea placeholder={'Enter your message'} value={state.newMessageText}
                          onChange={onChangeHandler}></textarea>
                <button onClick={addMessageHandler}>add Message</button>
            </div>

        </div>
    );
};

