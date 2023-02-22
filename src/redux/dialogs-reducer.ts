import {ActionType, avatar, DialogsPageType} from "./state";

export const addMessageAC = () => ({type: 'ADD-MESSAGE'}) as const
export const updateNewMessageTextAC = (newMessageText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText
}) as const

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
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