import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state: any) => {
    return {dialogsPage: state.dialogsPage}
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        updateNewMessageText: (newMessageText: string) => dispatch(updateNewMessageTextAC(newMessageText))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
