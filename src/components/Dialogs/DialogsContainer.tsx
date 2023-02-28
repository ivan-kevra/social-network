import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";


let mapStateToProps = (state: StateType) => {
    return {dialogsPage: state.dialogsPage}
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        updateNewMessageText: (newMessageText: string) => dispatch(updateNewMessageTextAC(newMessageText))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
