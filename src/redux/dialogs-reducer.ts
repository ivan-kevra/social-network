import {ActionType, avatar, DialogsPageType} from "./store";

let initialState = {
        messages: [
            {id: 1, message: 'Hi, I am 1st user', userId: 1, avatar},
            {id: 2, message: 'Hi, I am 2nd user', userId: 2, avatar},
            {id: 3, message: 'Bye from 1st user', userId: 1, avatar},
            {id: 4, message: 'Bye from 2nd user', userId: 2, avatar},
        ],
        newMessageText: '',
        dialogs: [
            {id: 1, name: 'Dimych', avatar},
            {id: 2, name: 'Andrey', avatar},
            {id: 3, name: 'Sveta', avatar},
            {id: 4, name: 'Sasha', avatar},
            {id: 5, name: 'Victor', avatar},
            {id: 6, name: 'Valera', avatar},
        ],
    }

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {id: 5, message: state.newMessageText, userId: 1, avatar}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}

export const addMessageAC = () => ({type: 'ADD-MESSAGE'}) as const
export const updateNewMessageTextAC = (newMessageText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText
}) as const