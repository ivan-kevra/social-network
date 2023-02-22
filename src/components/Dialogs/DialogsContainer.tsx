import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {ActionType, DialogsPageType, ProfilePageType} from "../../redux/store";
import {EmptyObject, Store} from "redux";

type DialogsContainerStatePropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionType>
}

export const DialogsContainer: React.FC<DialogsContainerStatePropsType> = (props) => {

    let state = props.store.getState().dialogsPage

    const addMessageHandler = () => {
        props.store.dispatch(addMessageAC())
    }
    const onChangeHandler = (newMessageText: string) => {
        props.store.dispatch(updateNewMessageTextAC(newMessageText))
    }

    return <Dialogs addMessage={addMessageHandler}
                    updateNewMessageText={onChangeHandler}
                    dialogsPage={state}/>
};

