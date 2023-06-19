import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import {AppRootStateType, useAppDispatch} from '../../redux/redux-store';
import Button from "@mui/material/Button";


type dialogsStatePropsType = {
    addMessage: (newMessage: string) => void
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

    const addMessageHandler = (value: { message: string }) => {
        props.addMessage(value.message)
    }
    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>{dialogs}</div>
            <div className={style.messages}>{messages}</div>
            <AddMessageForm addMessageHandler={addMessageHandler}/>
        </div>
    )
}


type AddMessageFormPropsType = {
    addMessageHandler: (value: { message: string }) => void
}
const AddMessageForm = (props: AddMessageFormPropsType) => {
    const dispatch = useAppDispatch()

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validate: (values) => {
            const errors = {}
        },
        onSubmit: values => {
            console.log(values)
            props.addMessageHandler(values)
            // dispatch(loginTC(values))
        },
    })
    return <form onSubmit={formik.handleSubmit}>
        <TextField label="message"
                   margin="normal"
                   {...formik.getFieldProps('message')}
                   onBlur={formik.handleBlur}/>
        <Button type={'submit'} variant={'contained'} color={'primary'}>
            Send
        </Button>
        {
            formik.errors.message ? <div style={{color: 'red'}}>{formik.errors.message}</div> : null
        }
    </form>
}
