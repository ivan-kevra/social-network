import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        updateNewMessageText: (newMessageText: string) => dispatch(updateNewMessageTextAC(newMessageText))
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
        WithAuthRedirect
)(Dialogs)
