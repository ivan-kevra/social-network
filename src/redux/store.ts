import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateNewMessageTextAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type PostType = {
    id: number
    postMessage: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    message: string
    userId: number
    avatar: string
}
export type FriendType = {
    id: number
    name: string
    avatar: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageText: string
}
export type SidebarType = {
    friends: FriendType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    getState: () => StateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionType) => void
}
export const avatar = 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'

export type ActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postMessage: 'post 1', likesCount: 10},
                {id: 2, postMessage: 'post 2', likesCount: 15},
                {id: 3, postMessage: 'post 3', likesCount: 20},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrew', avatar},
                {id: 2, name: 'Sasha', avatar},
                {id: 3, name: 'Igor', avatar},
            ]
        },
    },
    _callSubscriber(_state: StateType) {
        console.log('state was changed')
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}



