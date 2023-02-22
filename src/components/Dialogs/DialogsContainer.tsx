import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {ActionType, DialogsPageType, ProfilePageType} from "../../redux/store";
import {EmptyObject, Store} from "redux";
import {StoreContext} from '../../StoreContext';

type DialogsContainerStatePropsType = {
    // store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionType>
}

export const DialogsContainer: React.FC<DialogsContainerStatePropsType> = (props) => {


    return <StoreContext.Consumer>
        {(store: any) => {
            let state = store.getState().dialogsPage

            const addMessageHandler = () => {
                store.dispatch(addMessageAC())
            }
            const onChangeHandler = (newMessageText: string) => {
                store.dispatch(updateNewMessageTextAC(newMessageText))
            }
            return <Dialogs addMessage={addMessageHandler}
                            updateNewMessageText={onChangeHandler}
                            dialogsPage={state}/>
        }
        }
    </StoreContext.Consumer>
};

