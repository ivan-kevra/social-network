export type PostType = {
    id: number
    post: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: PostType[]

}
export type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, post: 'post 1', likesCount: 10},
            {id: 2, post: 'post 2', likesCount: 15},
            {id: 3, post: 'post 3', likesCount: 20},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'message 1'},
            {id: 2, message: 'message 2'},
            {id: 3, message: 'message 3'},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
    }
}