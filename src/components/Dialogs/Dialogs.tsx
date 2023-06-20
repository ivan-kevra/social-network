import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";
import {useFormik} from "formik";
import Button from "@mui/material/Button";
import {maxLengthMessageValidator, MessageErrorType} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormControls";


type dialogsStatePropsType = {
    addMessage: (newMessage: string | undefined) => void
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

    const addMessageHandler = (message: string | undefined) => {
        props.addMessage(message)
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
    addMessageHandler: (message: string | undefined) => void
}

const AddMessageForm = (props: AddMessageFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validate: (values: MessageErrorType) => maxLengthMessageValidator(10, values),
        onSubmit: values => {
            console.log(values.message)
            props.addMessageHandler(values.message)
            // dispatch(loginTC(values))
        },
    })
    return <form onSubmit={formik.handleSubmit}>
        <Textarea item={formik.errors.message}
                  {...formik.getFieldProps('message')}
                  onBlur={formik.handleBlur}/>
        <Button type={'submit'} variant={'contained'} color={'primary'}>
            Send
        </Button>
    </form>
}
